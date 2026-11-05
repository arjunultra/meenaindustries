export function initNav() {
  const toggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#mobile-menu");
  const iconOpen = toggle.querySelector('[data-icon="open"]');
  const iconClose = toggle.querySelector('[data-icon="close"]');

  // ---------- Mobile menu ----------
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("hidden", !open);
    menu.classList.toggle("flex", open);
    iconOpen.classList.toggle("hidden", open);
    iconClose.classList.toggle("hidden", !open);
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  // Close the menu after tapping a link
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  // Close with the Escape key and return focus to the button
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });

  // Close if the screen is resized to desktop width
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });

  // ---------- Active link highlighting ----------
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${id}`;
          if (isActive) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    // A section counts as "active" when it crosses the middle of the screen
    { rootMargin: "-50% 0px -50% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}
