import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Replace these with real shade names from your shade card
const COLOURS = [
  { name: "Ivory Cream", hex: "#F3E9D2" },
  { name: "Saffron Glow", hex: "#F4A300" },
  { name: "Terracotta Earth", hex: "#D9653B" },
  { name: "Sage Teal", hex: "#2E7D73" },
  { name: "Sky Breeze", hex: "#A9CFE3" },
  { name: "Rose Blush", hex: "#EBB8B8" },
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export function initHero() {
  initRepaint();
  // Wait for web fonts so SplitText measures the final word widths
  document.fonts.ready.then(playIntro);
}

/* ---------- Repaint the wall ---------- */
function initRepaint() {
  const container = document.querySelector("#swatches");
  const wall = document.querySelector("#wall");
  const paint = document.querySelector("#wall-paint");
  const mask = document.querySelector("#paint-mask-rect");
  const roller = document.querySelector("#roller");
  const status = document.querySelector("#wall-status");

  let current = COLOURS[0];
  let tl;

  COLOURS.forEach((colour, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "swatch";
    btn.style.setProperty("--swatch", colour.hex);
    btn.setAttribute("aria-label", colour.name);
    btn.setAttribute("aria-pressed", String(i === 0));
    btn.addEventListener("click", () => repaint(colour, btn));
    container.append(btn);
  });

  function repaint(colour, btn) {
    if (colour === current) return;
    tl?.progress(1); // finish any repaint still running

    current = colour;
    container.querySelectorAll(".swatch").forEach((b) => {
      b.setAttribute("aria-pressed", String(b === btn));
    });
    status.textContent = `Now showing: ${colour.name}`; // announced by aria-live

    if (reduceMotion.matches) {
      wall.setAttribute("fill", colour.hex);
      return;
    }

    paint.setAttribute("fill", colour.hex);
    tl = gsap.timeline({
      onComplete() {
        wall.setAttribute("fill", colour.hex);
        gsap.set(mask, { attr: { width: 0 } });
      },
    });
    tl.set(roller, { x: 0, opacity: 1 })
      .to(
        mask,
        { attr: { width: 400 }, duration: 1.1, ease: "power2.inOut" },
        0,
      )
      .to(roller, { x: 400, duration: 1.1, ease: "power2.inOut" }, 0)
      .to(roller, { opacity: 0, duration: 0.2 });
  }
}

/* ---------- Intro animation ---------- */
function playIntro() {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.set(".hero-reveal", { autoAlpha: 1 }); // un-hide; the tweens below start from hidden

    // aria defaults to "auto": the h1 gets an aria-label with the full sentence
    // and the word pieces are hidden from screen readers
    const split = SplitText.create(".hero-title", {
      type: "words",
      mask: "words",
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.6 })
      .from(
        split.words,
        { yPercent: 110, duration: 0.9, stagger: 0.06 },
        "-=0.2",
      )
      .from(".hero-text", { y: 24, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(
        ".hero-actions > *",
        { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
        "-=0.4",
      )
      .from(
        ".hero-trust li",
        { y: 12, opacity: 0, duration: 0.4, stagger: 0.08 },
        "-=0.3",
      )
      .from(
        ".hero-visual svg",
        { scale: 0.92, opacity: 0, duration: 1, ease: "expo.out" },
        0.2,
      )
      .from(
        "#swatches .swatch",
        { scale: 0, duration: 0.5, ease: "back.out(2)", stagger: 0.06 },
        "-=0.6",
      );

    // Runs if the user switches reduced motion on: undo the split
    return () => split.revert();
  });
}
