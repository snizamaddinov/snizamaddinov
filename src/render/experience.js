import { CARD_CLASSES, CARD_HOVER_BACKGROUND, escapeHtml, externalTitleLink, formatPeriod, techList } from './html.js';

function renderExperienceItem(experience) {
  const heading = `${escapeHtml(experience.title)} <span>&ndash;</span> <span class="inline-block italic">${escapeHtml(experience.company)}</span>`;
  const title = experience.url
    ? externalTitleLink(experience.url, experience.company, heading)
    : `<span class="text-base font-medium leading-tight">${heading}</span>`;

  return `
    <li class="mb-12">
      <div class="${CARD_CLASSES}">
        ${CARD_HOVER_BACKGROUND}
        <div class="z-10 sm:col-span-8">
          <header class="font-medium leading-snug">
            <h3>${title}</h3>
            <div><span class="text-xs font-light">${formatPeriod(experience.period)}</span></div>
          </header>
          <p class="mt-2 text-sm font-light leading-7">${escapeHtml(experience.summary)}</p>
          ${techList(experience.tech)}
        </div>
      </div>
    </li>`;
}

export function renderExperience(experienceList) {
  return `<ol class="group/list">${experienceList.map(renderExperienceItem).join('')}</ol>`;
}
