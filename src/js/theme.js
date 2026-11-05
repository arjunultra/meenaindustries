const KEY = "theme";
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// localStorage can be blocked in private mode, so wrap every call
const storage = {
  get: () => {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  },
  set: (v) => {
    try {
      localStorage.setItem(KEY, v);
    } catch {}
  },
  clear: () => {
    try {
      localStorage.removeItem(KEY);
    } catch {}
  },
};

export function initTheme() {
  const root = document.documentElement;
  const btn = document.querySelector("#theme-toggle");

  function apply(dark) {
    root.classList.toggle("dark", dark);
    btn.setAttribute("aria-pressed", String(dark));
  }

  // Sync the button with what the <head> script already decided
  apply(root.classList.contains("dark"));

  btn.addEventListener("click", () => {
    const dark = !root.classList.contains("dark");

    // If the choice matches the system, forget it, so the site keeps following the system
    if (dark === systemDark.matches) storage.clear();
    else storage.set(dark ? "dark" : "light");

    // Smooth cross-fade where the browser supports View Transitions
    if (document.startViewTransition && !reduceMotion.matches) {
      document.startViewTransition(() => apply(dark));
    } else {
      apply(dark);
    }
  });

  // Follow live system changes, unless the visitor has picked a theme
  systemDark.addEventListener("change", (e) => {
    if (!storage.get()) apply(e.matches);
  });
}
