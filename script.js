// Keep the footer year current automatically.
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Reveal sections and project cards as they enter the viewport.
const revealElements = document.querySelectorAll(
  'section:not(.hero) .reveal, .about-band .reveal'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  // Keep content visible in browsers without IntersectionObserver.
  revealElements.forEach((element) => element.classList.add('visible'));
}
