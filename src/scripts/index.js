import { constructExperienceSection } from "./experience";
import { constructProjectsSection } from "./projects";

constructExperienceSection();
constructProjectsSection();

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    const options = {
      threshold: 0.6
    };
  
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.querySelector('.nav-text').classList.remove('font-bold');
            if (link.getAttribute('href').substring(1) === entry.target.id) {
              link.querySelector('.nav-text').classList.add('font-bold');
            }
          });
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });