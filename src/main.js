import './styles.css';

const navigationLinks = document.querySelectorAll('nav a[href^="#"]');

const highlightActiveSection = (entries) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      navigationLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.querySelector('.nav-text').classList.toggle('font-bold', isActive);
      });
    });
};

const observer = new IntersectionObserver(highlightActiveSection, { rootMargin: '-30% 0px -65% 0px' });

document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
