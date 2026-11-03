# Meena Industries — Website

Single-page marketing site for Meena Industries, a decorative paint manufacturer.

## Stack (do not add frameworks)
- Vite (vanilla JS template) — no React, Vue or other frameworks
- Tailwind CSS v4 via `@tailwindcss/vite` — config lives in `src/style.css` under `@theme`, no `tailwind.config.js`
- Vanilla JavaScript as ES modules
- GSAP + ScrollTrigger for animations

## Page structure
One page, sections in this order, each a `<section>` with a matching `id`:
`#home` · `#about` · `#products` · `#paintculator` · `#contact`
Nav links smooth-scroll to these sections and highlight the active one.

## Products
- **Suncem** — cement paint
- **Suncoat** — distempers
- Acrylic emulsions
- Water-base primers: exterior wall primer, cement primer (interior walls)
- Oil-base primers: Red Oxide (Industrial Quality), Zinc Phosphate Yellow Metal Primer, Wood Primer (White, Pink)
- **Sudarshan** brand: Wall Putty powder, Universal Primer (water base, interior + exterior)

Keep product data in `src/data/products.js` and render from it; don't hard-code cards in HTML.

## Coding rules
- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`; one `<h1>` per page, logical heading order
- Accessibility: alt text on every image, visible focus states, labelled form fields, keyboard-usable nav and mobile menu, colour contrast ≥ WCAG AA
- Respect `prefers-reduced-motion`: disable or simplify GSAP animations when set
- SEO: descriptive `<title>` and meta description, Open Graph tags, canonical URL, JSON-LD `Organization`/`LocalBusiness` schema, `robots.txt`, `sitemap.xml`
- Performance: images in WebP/AVIF with width/height set, `loading="lazy"` below the fold, import only the GSAP plugins used
- Use design tokens from `@theme` (e.g. `bg-cream`, `text-ink`) — no raw hex values in markup
- One JS module per concern in `src/js/` (nav, animations, calculator, contact form)
- Mobile-first layouts

## Colour tokens
ink #1B2A41 · saffron #F4A300 · terracotta #D9653B · teal #2E7D73 · cream #FAF6EF · stone #6B7280
Buttons on saffron use ink text (white on saffron fails contrast).

## Workflow
- Work one section at a time; show the plan before large changes
- Run `npm run build` after changes to confirm it compiles
