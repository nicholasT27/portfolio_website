# Siang Portfolio

A responsive SvelteKit portfolio for Siang. It is designed to present his front-end work clearly to potential clients and employers across four connected pages: Home, About, Projects, and Contact.

## Preview

![Siang portfolio Home page](docs/home-layout.png)

## Design

The portfolio uses a calm, light **quiet** design: a warm off-white page, dark teal-charcoal text, soft rounded cards, and gentle motion. The Home and About pages each show a small animated "page being built" scene inside an arch instead of a photo.

- Outfit sans-serif type with a handwritten note in Caveat
- Home scene: a grey wireframe fills with colour block by block while a cursor follows, with a Design, Build, Launch switch
- About scene: page blocks drop in, bounce and snap together, then a click publishes the page
- Staged text reveals, scroll-in project cards with zooming screenshots, a sliding nav marker, a self-drawing education timeline, and page fades
- Projects page split into client projects (with a client testimonial) and personal projects
- Curated front-end project cards with live and source links (set in `src/lib/projects.js`)
- An About page with education, capabilities, résumé, and certificate links
- Responsive layouts for desktop, tablet, and mobile screens, with a top bar that stays fixed while scrolling
- Accessible semantic structure and reduced-motion support (all motion is skipped)

The `main` branch contains the publish-ready website. Future layout experiments can continue on `feature/siang-portfolio-prototype` before being reviewed and merged into `main`.

## Stack

- SvelteKit and Vite
- Tailwind CSS 3 with documented custom component styles
- Responsive, accessible semantic HTML

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

Project information is maintained centrally in `src/lib/projects.js`. Global design primitives and responsive component styles live in `src/app.css`, and the scroll effects live in `src/lib/quiet.js`. The contact form is intentionally a local prototype interaction and does not transmit data.
