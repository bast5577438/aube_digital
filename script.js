// ============================================================
// LANGUE (FR / EN)
// ============================================================
const langSwitch = document.getElementById('langSwitch');
const html = document.documentElement;

function setLang(lang){
  html.lang = lang;
  document.querySelectorAll('.lang-fr').forEach(el => el.hidden = lang !== 'fr');
  document.querySelectorAll('.lang-en').forEach(el => el.hidden = lang !== 'en');
  langSwitch.querySelector('.lang-fr').classList.toggle('is-active', lang === 'fr');
  langSwitch.querySelector('.lang-en').classList.toggle('is-active', lang === 'en');
  try{ localStorage.setItem('aube-lang', lang); }catch(e){}
}

let currentLang = 'fr';
try{ currentLang = localStorage.getItem('aube-lang') || 'fr'; }catch(e){}
setLang(currentLang);

langSwitch.addEventListener('click', () => {
  setLang(html.lang === 'fr' ? 'en' : 'fr');
});

// ============================================================
// MENU MOBILE
// ============================================================
const navBurger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');
navBurger.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// ============================================================
// REVEAL AU SCROLL
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-line').forEach(el => revealObserver.observe(el));

// Mots du manifeste, révélés un par un
const manifestoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const words = entry.target.querySelectorAll('.word');
      words.forEach((w, i) => {
        setTimeout(() => w.classList.add('is-in'), i * 90);
      });
      manifestoObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.manifesto-text').forEach(el => manifestoObserver.observe(el));

// ============================================================
// GLOW CURSEUR DANS LE HERO
// ============================================================
const hero = document.getElementById('hero');
if (hero && window.matchMedia('(hover: hover)').matches){
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty('--x', x + '%');
    hero.style.setProperty('--y', y + '%');
  });
}

// ============================================================
// NAV — fond plus opaque au scroll
// ============================================================
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 40 ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.08)';
}, { passive: true });
