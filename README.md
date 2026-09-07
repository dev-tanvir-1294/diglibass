# SteelExport Pro

A React + Tailwind CSS + GSAP product category page for a B2B stainless steel exporter targeting Saudi Arabia, UAE, and the wider Middle East.

## Features

- **Stainless Steel Flanges** product category page with enquiry-first layout
- **Enquiry form** with client-side validation (name, email, phone, product interest)
- **Mock API** (inline Vite middleware in dev, standalone server for production) — stores leads in `api/submissions.json`
- **GSAP + Lenis** — smooth scroll-triggered animations
- **Google Tag Manager** container + **GA4** event tracking on form submission
- **SVG images** — hero flange illustration, certification badges, flange type icons
- **Netlify-ready** — production build configured for one-click deploy

## Getting Started

```bash
# Install dependencies (includes devDependencies)
npm install

# Start dev server (Vite middleware handles API automatically)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run mock API server standalone (for production-like testing)
npm run server
```

### Mock API

The form submits to `/api/submissions` which is handled by:

- **Development**: Vite middleware plugin (`vite.api-plugin.ts`) — no separate server needed
- **Production**: Standalone server (`api/server.js` via `npm run server`)

| Endpoint | Method | Description |
|---|---|---|
| `/api/health` | GET | Health check |
| `/api/submissions` | GET | List all stored submissions |
| `/api/submissions` | POST | Create a new submission (stores in `api/submissions.json`) |

Submissions are logged to the console with a unique ID for verification.

### Google Tag Manager Setup

Replace `GTM-XXXXXXX` in `index.html` with your actual GTM container ID.

### Netlify Deployment

This project is configured for [Netlify](https://app.netlify.com) deployment:

1. Push to GitHub: `git push origin master`
2. Import the GitHub repo in Netlify
3. Netlify auto-runs `npm run build` and deploys `dist/`

## Stack

- **React 19** — UI library with `@gsap/react` integration
- **Vite 6** — Build tool & dev server
- **TypeScript** — Type safety
- **Tailwind CSS 3.4** — Utility-first styling
- **GSAP 3.15** — Scroll-triggered animations
- **Lenis 1.3** — Smooth scrolling
- **Netlify** — Hosting & deployment
