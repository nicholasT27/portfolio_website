# Siang Portfolio

A responsive SvelteKit portfolio for Siang Nicholas. The editorial prototype is implemented as four connected pages: home, selected work, about, and contact.

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

Project information is maintained centrally in `src/lib/projects.js`. Global design primitives and responsive component styles live in `src/app.css`. The contact form is intentionally a local prototype interaction and does not transmit data.
