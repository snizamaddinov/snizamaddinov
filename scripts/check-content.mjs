import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PROJECT_STATUSES = ['live', 'in-progress', 'archived'];
const PROJECT_LINK_KEYS = ['live', 'repo', 'article'];
const YEAR_MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

const problems = [];
const report = (where, message) => problems.push(`${where}: ${message}`);

const repoPath = (relativePath) => fileURLToPath(new URL(`../${relativePath}`, import.meta.url));

function readJson(name) {
  const path = `content/${name}.json`;
  try {
    return JSON.parse(readFileSync(repoPath(path), 'utf8'));
  } catch (error) {
    report(path, `cannot be read as JSON (${error.message})`);
    return null;
  }
}

const isText = (value) => typeof value === 'string' && value.trim() !== '';

function isHttpUrl(value) {
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

function requireText(where, item, fields) {
  fields.filter((field) => !isText(item[field])).forEach((field) => report(where, `"${field}" is required and must be text`));
}

function checkUrl(where, field, value, { optional }) {
  if (value === null || value === undefined) {
    if (!optional) report(where, `"${field}" is required`);
    return;
  }
  if (!isHttpUrl(value)) report(where, `"${field}" is not a valid http(s) URL: ${JSON.stringify(value)}`);
}

function checkPeriod(where, period) {
  if (!period || typeof period !== 'object') return report(where, '"period" is required, with "start" and "end" (either may be null)');
  ['start', 'end'].forEach((key) => {
    if (period[key] !== null && !YEAR_MONTH.test(period[key] ?? '')) {
      report(where, `"period.${key}" must be null or look like "2023-06"`);
    }
  });
}

function checkTech(where, tech) {
  if (!Array.isArray(tech) || tech.length === 0 || !tech.every(isText)) report(where, '"tech" must be a non-empty list of text items');
}

function checkStaticFile(where, field, sitePath) {
  if (!isText(sitePath) || !sitePath.startsWith('/')) return report(where, `"${field}" must be a path starting with "/"`);
  if (!existsSync(repoPath(`static${sitePath}`))) report(where, `"${field}" points to static${sitePath}, which does not exist`);
}

function checkProfile(profile) {
  const where = 'content/profile.json';
  requireText(where, profile, ['name', 'title', 'tagline', 'description']);
  checkUrl(where, 'siteUrl', profile.siteUrl, { optional: false });
  if (!Array.isArray(profile.about) || profile.about.length === 0 || !profile.about.every(isText)) {
    report(where, '"about" must be a non-empty list of paragraphs');
  }
  if (!profile.resume || !isText(profile.resume.label)) report(where, '"resume.label" is required');
  else checkStaticFile(where, 'resume.path', profile.resume.path);
  (profile.socials ?? []).forEach((social, index) => {
    const socialWhere = `${where} socials[${index}]`;
    requireText(socialWhere, social, ['name']);
    checkUrl(socialWhere, 'url', social.url, { optional: false });
    checkStaticFile(socialWhere, 'icon', social.icon);
  });
}

function checkExperience(experienceList) {
  if (!Array.isArray(experienceList)) return report('content/experience.json', 'must be a list');
  experienceList.forEach((experience, index) => {
    const where = `content/experience.json [${index}] ${experience.company ?? ''}`.trim();
    requireText(where, experience, ['title', 'company', 'summary']);
    checkUrl(where, 'url', experience.url, { optional: true });
    checkPeriod(where, experience.period);
    checkTech(where, experience.tech);
  });
}

function checkProjects(projectList) {
  if (!Array.isArray(projectList)) return report('content/projects.json', 'must be a list');
  const seenIds = new Set();
  projectList.forEach((project, index) => {
    const where = `content/projects.json [${index}] ${project.id ?? ''}`.trim();
    requireText(where, project, ['id', 'title', 'summary', 'role']);
    if (seenIds.has(project.id)) report(where, `id "${project.id}" is used more than once`);
    seenIds.add(project.id);
    if (project.company !== undefined && project.company !== null && !isText(project.company)) report(where, '"company" must be text when present');
    checkPeriod(where, project.period);
    if (!PROJECT_STATUSES.includes(project.status)) report(where, `"status" must be one of ${PROJECT_STATUSES.join(', ')}`);
    if (typeof project.featured !== 'boolean') report(where, '"featured" must be true or false');
    if (typeof project.order !== 'number') report(where, '"order" must be a number');
    checkTech(where, project.tech);
    if (!project.links || typeof project.links !== 'object') report(where, '"links" is required (use null for a link you do not have)');
    else PROJECT_LINK_KEYS.forEach((key) => checkUrl(where, `links.${key}`, project.links[key], { optional: true }));
    if (project.image) {
      checkStaticFile(where, 'image.src', project.image.src);
      if (!isText(project.image.alt)) report(where, '"image.alt" is required when an image is set');
    }
  });
}

const profile = readJson('profile');
const experience = readJson('experience');
const projects = readJson('projects');

if (profile) checkProfile(profile);
if (experience) checkExperience(experience);
if (projects) checkProjects(projects);

if (problems.length > 0) {
  console.error(`Content check failed with ${problems.length} problem(s):`);
  problems.forEach((problem) => console.error(`  - ${problem}`));
  process.exit(1);
}

console.log(`Content check passed: ${experience.length} experience entries, ${projects.length} projects.`);
