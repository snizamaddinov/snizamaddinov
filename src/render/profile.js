import { escapeHtml, inlineLinks } from './html.js';

export function renderAbout(paragraphs) {
  return paragraphs.map((paragraph) => `<p class="mb-4">${inlineLinks(paragraph)}</p>`).join('');
}

export function renderSocials(socials) {
  return socials
    .map((social) => `
      <li class="mr-5 shrink-0 text-xs">
        <a class="block w-8 hover:opacity-70" href="${escapeHtml(social.url)}" target="_blank" rel="noreferrer noopener">
          <span class="sr-only">${escapeHtml(social.name)}</span>
          <img class="w-full" src="${escapeHtml(social.icon)}" alt="${escapeHtml(social.name)} logo" width="32" height="32">
        </a>
      </li>`)
    .join('');
}
