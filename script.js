// Keep the footer year current automatically.
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal sections and project cards as they enter the viewport.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

document
  .querySelectorAll('section:not(.hero) .reveal, .about-band .reveal')
  .forEach((element) => revealObserver.observe(element));
