# Ridwan Muhammad Raihan — Portfolio

Personal portfolio website built with Astro, Tailwind CSS, and deployed on Netlify.

**Live:** [ridwanmuh3.netlify.app](https://ridwanmuh3.netlify.com/)

## Tech Stack

- [Astro](https://astro.build/) v6 — Static site framework
- [Tailwind CSS](https://tailwindcss.com/) v4 — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Strict mode
- [Sharp](https://sharp.pixelplumbing.com/) — Image optimization
- [Netlify](https://www.netlify.com/) — Deployment

## Features

- Single-page portfolio with Hero, About, Experiences, and Connect Links sections
- Responsive mobile-first design
- Mesh gradient background
- Type-safe data-driven content
- Optimized images via `astro:assets`
- Open Graph meta tags

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── assets/images/       # Profile picture, icons
│   ├── components/
│   │   ├── layouts/         # Head, Footer
│   │   ├── sections/        # Hero, About, Experiences, ConnectLinks
│   │   └── ui/              # Experience, Project, ConnectLink
│   ├── data/                # experiences.ts, connect-links.ts
│   ├── layouts/             # Layout.astro
│   ├── pages/               # index.astro, 500.astro
│   ├── styles/              # global.css
│   └── types/               # TypeScript interfaces
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Commands

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `pnpm install` | Install dependencies                   |
| `pnpm dev`     | Start dev server at `localhost:4321`   |
| `pnpm build`   | Build production site to `./dist/`     |
| `pnpm preview` | Preview build locally before deploying |
