import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const mm = gsap.matchMedia();

  // Only animate if the user hasn't asked for reduced motion
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Test animation — hero heading slides up and fades in
    gsap.from("h1", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });
}
