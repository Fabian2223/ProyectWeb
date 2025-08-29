export function ready(fn: () => void) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn, { once: true });
}

export function initToggleAttr(selector = '[data-toggle]') {
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest(selector) as HTMLElement | null;
    if (!el) return;
    const target = el.getAttribute('data-toggle');
    if (!target) return;
    const t = document.querySelector<HTMLElement>(target);
    if (t) t.toggleAttribute('data-open');
  });
}

export function initCopy(selector = '[data-copy]') {
  document.addEventListener('click', async (e) => {
    const el = (e.target as HTMLElement).closest(selector) as HTMLElement | null;
    if (!el) return;
    const text = el.getAttribute('data-copy') || el.textContent || '';
    try { await navigator.clipboard.writeText(text.trim()); el.setAttribute('aria-live','polite'); el.setAttribute('data-copied','true');
      setTimeout(()=>el.removeAttribute('data-copied'),1200);
    } catch {}
  });
}

export function initAll() { initToggleAttr(); initCopy(); }
