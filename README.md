# ptisai-portfolio

Personal portfolio for Chris Vickers (PT): projects, current work and AI coursework.

Live at https://ptisai-portfolio.vercel.app

## Stack

- Next.js 14 (App Router, static export)
- React 18 and TypeScript
- Tailwind CSS
- lucide-react icons
- Hosted on Vercel

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build the static site:

```bash
npm run build
```

The output goes to `out/`.

## Where the content lives

- `app/data/projects.ts`: the project cards. Only public work with a working link goes here.
- `app/data/certificates.ts`: coursework, grouped by topic.
- `app/components/Experience.tsx`: current role, side work and tools.
- `app/components/Hero.tsx` and `Contact.tsx`: intro and contact links.
