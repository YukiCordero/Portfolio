const root = document.documentElement;
root.classList.remove('no-js');
root.classList.add('js');

const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const navToggleLabel = document.querySelector('[data-nav-toggle-label]');
const progressBar = document.querySelector('[data-scroll-progress]');
const yearEl = document.querySelector('[data-year]');
const copyButton = document.querySelector('[data-copy-email]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function setNavState(isOpen) {
  if (!navToggle || !navMenu) return;

  navToggle.setAttribute('aria-expanded', String(isOpen));
  navMenu.classList.toggle('is-open', isOpen);

  if (navToggleLabel) {
    navToggleLabel.textContent = isOpen ? 'Close navigation' : 'Open navigation';
  }
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setNavState(!isOpen);
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setNavState(false);
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;

    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen && !navMenu.contains(target) && !navToggle.contains(target)) {
      setNavState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setNavState(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) {
      setNavState(false);
    }
  });
}

function updateScrollProgress() {
  if (!progressBar) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();

function initRevealAnimations() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  try {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    root.classList.add('reveal-ready');
    revealItems.forEach((item) => revealObserver.observe(item));
  } catch (error) {
    root.classList.remove('reveal-ready');
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
}

initRevealAnimations();

const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
const navTargetIds = new Set(navLinks.map((link) => link.getAttribute('href')?.slice(1)).filter(Boolean));
const sections = [...document.querySelectorAll('main section[id]')].filter((section) => navTargetIds.has(section.id));

if ('IntersectionObserver' in window && sections.length && navLinks.length) {
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

  sections.forEach((section) => activeObserver.observe(section));
}

function initMetricCountUp() {
  const counters = [...document.querySelectorAll('[data-count]')];
  if (!counters.length || prefersReducedMotion || !('IntersectionObserver' in window)) return;

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = Number(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-count-suffix') || '';
      if (!Number.isFinite(target)) {
        observer.unobserve(el);
        return;
      }

      const duration = 820;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.35 });

  counters.forEach((counter) => counterObserver.observe(counter));
}

initMetricCountUp();

function initPointerSpotlight() {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!finePointer || prefersReducedMotion) return;

  let rafId = null;
  let nextX = window.innerWidth / 2;
  let nextY = window.innerHeight * 0.18;

  root.classList.add('pointer-ready');

  function updateSpotlight() {
    root.style.setProperty('--spotlight-x', `${nextX}px`);
    root.style.setProperty('--spotlight-y', `${nextY}px`);
    rafId = null;
  }

  window.addEventListener('pointermove', (event) => {
    nextX = event.clientX;
    nextY = event.clientY;
    if (rafId === null) rafId = requestAnimationFrame(updateSpotlight);
  }, { passive: true });
}

initPointerSpotlight();

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fall through to the textarea fallback below.
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.top = '-999px';
  textarea.style.left = '-999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    return document.execCommand('copy');
  } catch (error) {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

if (copyButton) {
  copyButton.setAttribute('aria-live', 'polite');

  copyButton.addEventListener('click', async () => {
    const email = copyButton.getAttribute('data-copy-email');
    if (!email) return;

    const originalText = copyButton.dataset.originalText || copyButton.textContent || 'Copy email address';
    copyButton.dataset.originalText = originalText;

    const copied = await copyText(email);
    if (copied) {
      copyButton.textContent = 'Email copied';
      window.setTimeout(() => {
        copyButton.textContent = originalText;
      }, 1800);
    } else {
      copyButton.textContent = 'Open email app';
      window.setTimeout(() => {
        copyButton.textContent = originalText;
      }, 1800);
      window.location.href = `mailto:${email}`;
    }
  });
}
