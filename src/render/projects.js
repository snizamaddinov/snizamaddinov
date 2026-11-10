import { CARD_CLASSES, CARD_HOVER_BACKGROUND, escapeHtml, externalTitleLink, formatPeriod, techList } from './html.js';

const STATUS_TAGS = {
  'in-progress': 'In progress',
  archived: 'Archived',
};

const EXTRA_LINK_LABELS = {
  repo: 'Source code',
  article: 'Article',
};

function renderStatusTag(status) {
  const label = STATUS_TAGS[status];
  if (!label) return '';
  return `<span class="ml-2 inline-block rounded-full border border-slate-400 px-2 py-0.5 align-middle text-[0.65rem] font-medium uppercase tracking-widest">${label}</span>`;
}

function renderExtraLinks(links) {
  return Object.entries(EXTRA_LINK_LABELS)
    .filter(([key]) => links[key])
    .map(([key, label]) => `<a class="relative z-10 mr-4 text-xs font-medium underline hover:font-bold" href="${escapeHtml(links[key])}" target="_blank" rel="noreferrer noopener">${label}</a>`)
    .join('');
}

function renderProjectItem(project) {
  const title = project.links.live
    ? externalTitleLink(project.links.live, project.title, escapeHtml(project.title))
    : `<span class="text-base font-medium leading-tight">${escapeHtml(project.title)}</span>`;
  const context = [project.role, project.company, formatPeriod(project.period)].filter(Boolean).map(escapeHtml).join(' · ');
  const extraLinks = renderExtraLinks(project.links);
  const textColumns = project.image ? 'sm:col-span-6' : 'sm:col-span-8';
  const image = project.image
    ? `<img class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:col-start-7 sm:translate-y-1" src="${escapeHtml(project.image.src)}" alt="${escapeHtml(project.image.alt)}" loading="lazy" decoding="async" width="250" height="140">`
    : '';

  return `
    <li class="mb-12" id="project-${escapeHtml(project.id)}">
      <div class="${CARD_CLASSES}">
        ${CARD_HOVER_BACKGROUND}
        <div class="z-10 ${textColumns}">
          <h3>${title}${renderStatusTag(project.status)}</h3>
          <p class="mt-1 text-xs font-light">${context}</p>
          <p class="mt-2 text-sm font-light leading-7">${escapeHtml(project.summary)}</p>
          ${extraLinks ? `<p class="mt-2">${extraLinks}</p>` : ''}
          ${techList(project.tech)}
        </div>
        ${image}
      </div>
    </li>`;
}

export function renderProjects(projectList) {
  const ordered = [...projectList].sort((first, second) => first.order - second.order);
  return `<ol class="group/list">${ordered.map(renderProjectItem).join('')}</ol>`;
}
