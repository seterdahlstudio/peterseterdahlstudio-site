// Mobile menu: the ☰ button shows and hides the four links.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '✕' : '☰';
  });
}

// Viewer: click any work in a gallery to see it large with its caption.
// Arrow keys or the ‹ › buttons move between works; Esc or ✕ closes.
const works = [...document.querySelectorAll('.gallery .work')];
if (works.length) {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = `
    <button class="lb-close" aria-label="Close">✕</button>
    <button class="lb-prev" aria-label="Previous">‹</button>
    <img alt="">
    <div class="lb-caption"></div>
    <button class="lb-next" aria-label="Next">›</button>`;
  document.body.appendChild(box);

  const img = box.querySelector('img');
  const cap = box.querySelector('.lb-caption');
  let current = 0;

  const show = (i) => {
    current = (i + works.length) % works.length;
    const w = works[current];
    const link = w.querySelector('a');
    img.src = link.getAttribute('href');
    img.alt = w.querySelector('img').alt;
    cap.innerHTML = w.querySelector('figcaption')?.innerHTML || '';
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    box.classList.remove('open');
    document.body.style.overflow = '';
  };

  works.forEach((w, i) => {
    w.querySelector('a').addEventListener('click', (e) => { e.preventDefault(); show(i); });
  });

  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  box.addEventListener('click', (e) => { if (e.target === box) close(); });

  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Swipe left/right on phones
  let startX = null;
  box.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });
}
