# Booksy Global website

A responsive multi-page accounting firm website built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4. The visual design, page content, shared sections, and UI components are ported from the original Booksy React site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Routes

- / — Home
- /about — About the firm
- /services — Services overview
- /services/[slug] — Bookkeeping, tax preparation, payroll, financial statements, business advisory, and tax planning
- /industries — Industries served
- /resources — Accounting blog and articles
- /contact — Contact and consultation form
- /terms — Legal page

Each route defines page metadata for search results. Shared site content is in `src/data/site.ts`; shared sections and components are in `src/components`; original page content components are in `src/site-pages`.

## Commands

- `npm run dev` — Start the development server
- `npm run build` — Create a production build
- `npm run start` — Serve the production build
- `npm run lint` — Run ESLint
