/* ========================================
   INTERSECTION OBSERVER - Fade-up animations
   Animates sections as they scroll into view
   ======================================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ========================================
   FORM SUBMISSION HANDLER
   Shows confirmation message on submit
   ======================================== */
document.querySelector('.btn-submit').addEventListener('click', function() {
  this.textContent = '✓ Request Sent!';
  this.style.background = '#2d4f2d';
  setTimeout(() => {
    this.textContent = 'Send My Request →';
    this.style.background = '';
  }, 3000);
});
