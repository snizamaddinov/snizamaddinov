const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (character) => ESCAPES[character]);
}

export function inlineLinks(text) {
  return escapeHtml(text).replace(
    /\[([^\]]+)\]\((https?:[^)\s]+)\)/g,
    '<a class="text-blue-600 hover:underline" href="$2" target="_blank" rel="noreferrer noopener">$1</a>',
  );
}

function formatMonth(yearMonth) {
  const [year, month] = yearMonth.split('-');
  return `${MONTH_NAMES[Number(month) - 1]} ${year}`;
}

export function formatPeriod(period) {
  if (!period || (!period.start && !period.end)) return '';
  if (!period.start) return formatMonth(period.end);
  return `${formatMonth(period.start)} – ${period.end ? formatMonth(period.end) : 'Present'}`;
}

export const ARROW_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>`;

export const CARD_HOVER_BACKGROUND = `<div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] lg:group-hover:drop-shadow-lg"></div>`;

export const CARD_CLASSES = 'group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50';

export const TITLE_LINK_CLASSES = 'group/link inline-flex items-baseline text-base font-medium leading-tight hover:font-bold focus-visible:font-bold';

export function externalTitleLink(url, label, innerHtml) {
  return `<a class="${TITLE_LINK_CLASSES}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer noopener" aria-label="${escapeHtml(label)} (opens in a new tab)">
            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>${innerHtml}${ARROW_ICON}</span>
          </a>`;
}

export function techList(tech) {
  const items = tech
    .map((name) => `<li class="mr-1.5 mt-2"><div class="flex items-center rounded-full bg-zinc-400/10 px-3 py-1 text-xs font-medium leading-5 tracking-widest">${escapeHtml(name)}</div></li>`)
    .join('');
  return `<ul class="mt-2 flex flex-wrap" aria-label="Technologies used">${items}</ul>`;
}
