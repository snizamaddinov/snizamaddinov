(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function r(e){return{experience:["mb-16","lg:py-6","scroll-mt-24","md:mb-24","lg:mb-36","lg:scroll-mt-24"],projects:["mb-16","lg:py-6","scroll-mt-24","md:mb-24","lg:mb-36","lg:scroll-mt-24"]}[e]}function c(e){const n=`
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-5 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">
        ${e}
        </h2>
    </div>
    `,i=document.createElement("template");return i.innerHTML=n.trim(),i.content.firstChild}function d(e){const n=new Date(e.start),i=n.toLocaleString("default",{month:"short"}),o=n.getFullYear();if(!e.end)return`${i} ${o} - Present`;const t=new Date(e.end),s=t.toLocaleString("default",{month:"short"}),a=t.getFullYear();return`${i} ${o} - ${s} ${a}`}const m=[{title:"Backend Developer",company:"BK Mobil",link:"https://bktomorrow.com/",dateRange:{start:"2023/06/01",end:null},description:"Lead developer for Metodbox AI project, managing platforms, developing admin panels, and implementing integration systems. Improved user engagement through notification system development.",technologies:["PHP","Symfony","Python","Django","MySQL","MongoDB","Docker","AWS","GCP"]},{title:"Backend Developer",company:"QOSHE",link:"https://qoshe.com/",dateRange:{start:"2021/08/01",end:"2023/06/01"},description:"Developed Twitter API-based streaming software, implemented logging system, and designed microservices to improve system functionality and efficiency.",technologies:["Python","MySQL","Redis","MongoDB","PHP"]},{title:"Full Stack Developer Intern",company:"Innova",link:"https://www.innova.com.tr/",dateRange:{start:"2022/07/01",end:"2022/01/01"},description:"Designed test suites for Web Services, collaborated on bug resolution, and developed full stack web pages for ATS system.",technologies:["Java","Spring Boot","Vue.js","Cucumber","JIRA","Bitbucket"]},{title:"Student Attendant and Web Developer Intern",company:"Atilim University",link:"https://www.atilim.edu.tr/",dateRange:{start:"2021/05/01",end:"2021/09/01"},description:"Provided information to prospective students and built websites for university events, enhancing communication skills.",technologies:["PHP","MySQL","HTML","CSS","JavaScript"]}];function g(){const e=document.getElementById("experience"),n=c("Experience"),i=r("experience");e.classList.add(...i),e.appendChild(n);const o=document.createElement("ol");o.classList.add("group/list"),m.forEach(t=>{const s=p(t);o.appendChild(s)}),e.appendChild(o)}function p(e){const n=document.createElement("li");n.classList.add("mb-12");const i=d(e.dateRange),o=`
    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] lg:group-hover:drop-shadow-lg"></div>
        <div class="z-10 sm:col-span-7 lg:flex lg:justify-between">
            <div>
                <header class="leading-snug font-medium">
                    <div>
                        <a class="inline-flex items-baseline font-medium leading-tight hover:font-bold focus-visible:font-bold group/link text-base" href="${e.link}" target="_blank" rel="noreferrer noopener" aria-label="${e.company} (opens in a new tab)">
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>${e.title} <span>&ndash;</span> <span class="inline-block italic">${e.company}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span>
                        </a>
                    </div>
                    <div>
                        <span class="text-xs font-light">${i}</span>
                    </div>
                </header>
                <p class="mt-2 text-sm leading-7 font-light">${e.description}</p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                    ${e.technologies.map(t=>`
                    <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-zinc-400/10 px-3 py-1 text-xs font-medium leading-5 tracking-widest">${t}</div>
                    </li>`).join("")}
                </ul>
            </div>
        </div>
    </div>
    `;return n.innerHTML=o,n}const u=[{title:"Notification System for Metodbox and Ugur Dijital",url:"https://www.bktomorrow.com/metodbox/",description:"Developed a comprehensive notification system handling 60+ notification types, increasing platform engagement by 40% and reducing missed educational activities by 60% for 600,000+ users.",technologies:["PHP","Symfony","MySQL","MongoDB","GCP","Firebase","Docker"],image:{alt:"Notification System for Metodbox and Ugur Dijital card",src:"assets/images/metodbox.png"}},{title:"Admin Panel for Seçenek",url:"https://secenek.club/",description:"Developed an admin panel for an educational platform, including user management, financial reporting, and CRUD operations for curriculum data following microservice architecture.",technologies:["PHP","Symfony","MySQL","GCP","Firebase","AWS S3","Docker"],image:{alt:"Admin Panel for Seçenek card",src:"assets/images/secenek.png"}},{title:"Metodbox AI Project",url:"https://www.bktomorrow.com/metodbox-ai/",description:"Led development of an AI assistant with RAG capabilities, processing 65,000 videos and 30,000 books, integrating multiple LLMs and implementing voice and image analysis features.",technologies:["Python","Django","AWS Bedrock","OpenSearch","PostgreSQL","MySQL","Redis","Docker"],image:{alt:"Metodbox AI Project card",src:"assets/images/metodboxai.png"}},{title:"PayFlex (ATS) Web Pages",url:"https://payflex.com.tr/",description:"Developed the full stack of ATS (Alacak Takip Sistemi) web pages using Java and Spring Boot for backend development, and Vue.js 2 for frontend, demonstrating a solid grasp of Object-Oriented Programming and Java frameworks.",technologies:["Java","Spring Boot","Vue.js 2","OOP"],image:{alt:"ATS (Alacak Takip Sistemi) Web Pages card",src:"assets/images/payflex.png"}},{title:"Twitter API-based Streaming Software",url:"https://qoshe.com/",description:"Developed a high-maintainability, efficient, and fault-tolerant streaming software based on Twitter API for QOSHE News.",technologies:["Python","MySQL","Redis","MongoDB"],image:{alt:"Twitter API-based Streaming Software card",src:"assets/images/qoshe.png"}}];function f(){const e=document.getElementById("projects"),n=c("Projects"),i=r("projects");e.classList.add(...i),e.appendChild(n);const o=document.createElement("ol");o.classList.add("group/list"),u.forEach(t=>{const s=h(t);o.appendChild(s)}),e.appendChild(o)}function h(e){const n=document.createElement("li");n.classList.add("mb-12");const i=`
        <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] lg:group-hover:drop-shadow-lg"></div>
            <div class="z-10 sm:col-span-6 sm:col-start-1">
                <h3>
                    <a class="inline-flex items-baseline font-medium leading-tight hover:font-bold focus-visible:font-bold group/link text-base" href="${e.url}" target="_blank" rel="noreferrer noopener" aria-label="${e.title} (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>${e.title}
                            <span class="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </span>
                    </a>
                </h3>
                <p class="mt-2 t-2 text-sm leading-7 font-light">${e.description}</p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                    ${e.technologies.map(o=>`
                        <li class="mr-1.5 mt-2">
                            <div class="flex items-center rounded-full bg-zinc-400/10 px-3 py-1 text-xs font-medium leading-5 tracking-widest">${o}</div>
                        </li>
                    `).join("")}
                </ul>
            </div>
            <img 
                alt="${e.image.alt}" 
                loading="lazy" 
                width="250" 
                height="65" 
                decoding="async" 
                data-nimg="1" 
                class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:col-start-7 sm:translate-y-1" 
                style="color:transparent" 
                src="${e.image.src}">
        </div>
    `;return n.innerHTML=i,n}g();f();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll("section"),n=document.querySelectorAll("nav ul li a"),i={threshold:.6};let o=new IntersectionObserver((t,s)=>{t.forEach(a=>{a.isIntersecting&&n.forEach(l=>{l.querySelector(".nav-text").classList.remove("font-bold"),l.getAttribute("href").substring(1)===a.target.id&&l.querySelector(".nav-text").classList.add("font-bold")})})},i);e.forEach(t=>{o.observe(t)})});
