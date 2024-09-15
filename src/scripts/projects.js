import { getSectionElementClassList, getSectionTitleElement } from "./section-utils";
import { projectsData } from '../content/projects.js';

export function constructProjectsSection(){
    const projectsTemplate = document.getElementById('projects');
    const projectsTitle = getSectionTitleElement('Projects');
    const classList = getSectionElementClassList('projects');
    projectsTemplate.classList.add(...classList);

    projectsTemplate.appendChild(projectsTitle);

    const olElement = document.createElement('ol')
    olElement.classList.add('group/list');

    projectsData.forEach(project => {
            const liElement = createListItem(project);
            olElement.appendChild(liElement);
        }
    );

    projectsTemplate.appendChild(olElement);

}


function createListItem(project){
    const liElement = document.createElement('li')
    liElement.classList.add('mb-12');

    const liElementTemplate = `
        <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] lg:group-hover:drop-shadow-lg"></div>
            <div class="z-10 sm:col-span-6 sm:col-start-1">
                <h3>
                    <a class="inline-flex items-baseline font-medium leading-tight hover:font-bold focus-visible:font-bold group/link text-base" href="${project.url}" target="_blank" rel="noreferrer noopener" aria-label="${project.title} (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>${project.title}
                            <span class="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </span>
                    </a>
                </h3>
                <p class="mt-2 t-2 text-sm leading-7 font-light">${project.description}</p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                    ${project.technologies.map(tech => `
                        <li class="mr-1.5 mt-2">
                            <div class="flex items-center rounded-full bg-zinc-400/10 px-3 py-1 text-xs font-medium leading-5 tracking-widest">${tech}</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <img 
                alt="${project.image.alt}" 
                loading="lazy" 
                width="250" 
                height="65" 
                decoding="async" 
                data-nimg="1" 
                class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:col-start-7 sm:translate-y-1" 
                style="color:transparent" 
                src="${project.image.src}">
        </div>
    `;
    liElement.innerHTML = liElementTemplate;
    
    return liElement;
}
