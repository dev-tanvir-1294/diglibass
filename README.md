# SteelExport Pro

A React + Tailwind CSS + GSAP product category page for a B2B stainless steel exporter targeting Saudi Arabia, UAE, and the wider Middle East.

## Features

- **Stainless Steel Flanges** product category page with enquiry-first layout
- **Enquiry form** with client-side validation (name, email, phone, product interest)
- **Mock API server** for storing lead submissions (Node.js, no external dependencies)
- **GSAP + Lenis** — smooth scroll-triggered animations
- **Google Tag Manager** container + **GA4** event tracking on form submission
- **Netlify-ready** — production build configured for one-click deploy

## Getting Started

```bash
# Install dependencies (includes devDependencies)
npm install

# Start both the mock API server and dev server
npm run server   # Terminal 1 — mock API on http://localhost:4000
npm run dev      # Terminal 2 — Vite dev server on http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### Mock API Server

The mock API server (`api/server.js`) provides:
- `POST /api/submissions` — accepts form submissions, stores in `api/submissions.json`
- `GET /api/submissions` — lists all submissions (CSV-style verification)
- `GET /health` — health check

Submissions are logged to the server console with a unique ID for verification.

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
