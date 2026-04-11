// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

// PARTICLES
const container = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = (6 + Math.random() * 14) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  p.style.width = p.style.height = (Math.random() < 0.3 ? 3 : 2) + 'px';
  const colors = ['var(--accent)', 'var(--accent3)', 'var(--green)', 'var(--accent2)'];
  p.style.background = colors[Math.floor(Math.random() * colors.length)];
  container.appendChild(p);
}

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
