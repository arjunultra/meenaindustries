import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    aboutAnimations();
    productsAnimations();
    paintculatorAnimations();
    contactAnimations();
  });
}

function aboutAnimations() {
  // Story text, headings and photo fade up one after another
  gsap.utils.toArray("#about .about-reveal").forEach((el) => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });

  // Jubilee badge pops in with a little spin
  gsap.from(".jubilee-badge", {
    scale: 0,
    rotate: -90,
    duration: 0.9,
    ease: "back.out(1.8)",
    scrollTrigger: { trigger: ".jubilee-badge", start: "top 90%", once: true },
  });

  // Stat counters count up from 0
  gsap.utils.toArray("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const counter = { value: 0 };
    el.textContent = "0";

    gsap.to(counter, {
      value: target,
      duration: 2,
      ease: "power2.out",
      snap: { value: 1 }, // whole numbers only
      onUpdate: () => {
        el.textContent = counter.value;
      },
      scrollTrigger: { trigger: ".stats", start: "top 80%", once: true },
    });
  });

  // Why-choose-us cards rise in, staggered
  gsap.from(".why-card", {
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: { trigger: ".why-grid", start: "top 80%", once: true },
  });

  // Timeline line draws itself as you scroll
  gsap.from(".timeline-line", {
    scaleY: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 70%",
      end: "bottom 60%",
      scrub: true, // tied to the scrollbar position
    },
  });

  // Each milestone slides in as the line reaches it
  gsap.utils.toArray(".timeline-item").forEach((item) => {
    gsap.from(item, {
      x: -24,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: item, start: "top 75%", once: true },
    });
  });
}
function productsAnimations() {
  gsap.utils.toArray("#products .products-reveal").forEach((el) => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });

  gsap.from(".product-card", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.08,
    scrollTrigger: { trigger: "#product-grid", start: "top 80%", once: true },
  });
}
// paintculator
function paintculatorAnimations() {
  gsap.utils.toArray("#paintculator .calc-reveal").forEach((el) => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });
}
// contact animations
function contactAnimations() {
  gsap.utils.toArray("#contact .contact-reveal").forEach((el) => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });
}
