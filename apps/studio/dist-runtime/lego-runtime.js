function c(e) {
  document.readyState !== "loading" ? e() : document.addEventListener("DOMContentLoaded", e, { once: !0 });
}
function a(e = "[data-toggle]") {
  document.addEventListener("click", (n) => {
    const t = n.target.closest(e);
    if (!t) return;
    const i = t.getAttribute("data-toggle");
    if (!i) return;
    const o = document.querySelector(i);
    o && o.toggleAttribute("data-open");
  });
}
function r(e = "[data-copy]") {
  document.addEventListener("click", async (n) => {
    const t = n.target.closest(e);
    if (!t) return;
    const i = t.getAttribute("data-copy") || t.textContent || "";
    try {
      await navigator.clipboard.writeText(i.trim()), t.setAttribute("aria-live", "polite"), t.setAttribute("data-copied", "true"), setTimeout(() => t.removeAttribute("data-copied"), 1200);
    } catch {
    }
  });
}
function d() {
  a(), r();
}
export {
  d as initAll,
  r as initCopy,
  a as initToggleAttr,
  c as ready
};
