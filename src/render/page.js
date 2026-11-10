import { escapeHtml } from './html.js';
import { renderExperience } from './experience.js';
import { renderAbout, renderSocials } from './profile.js';
import { renderProjects } from './projects.js';

export function renderPage(template, { profile, experience, projects }) {
  const replacements = {
    '{{name}}': escapeHtml(profile.name),
    '{{title}}': escapeHtml(profile.title),
    '{{tagline}}': escapeHtml(profile.tagline),
    '{{description}}': escapeHtml(profile.description),
    '{{siteUrl}}': escapeHtml(profile.siteUrl),
    '{{resumeLabel}}': escapeHtml(profile.resume.label),
    '{{resumePath}}': escapeHtml(profile.resume.path),
    '<!-- render:about -->': renderAbout(profile.about),
    '<!-- render:socials -->': renderSocials(profile.socials),
    '<!-- render:experience -->': renderExperience(experience),
    '<!-- render:projects -->': renderProjects(projects),
  };

  return Object.entries(replacements).reduce(
    (html, [placeholder, value]) => html.replaceAll(placeholder, () => value),
    template,
  );
}
