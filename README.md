# Ridwan Muhammad Raihan — Portfolio

Personal portfolio website built with Bun, React, Vite, and TypeScript, deployed on Netlify.

**Live:** [ridwanmuh3.netlify.app](https://ridwanmuh3.netlify.app/)

## Tech Stack

- [Bun](https://bun.sh/) — Runtime and package manager
- [React](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — Build tool and dev server
- [TypeScript](https://www.typescriptlang.org/) — Strict mode
- CSS custom properties — Design system tokens
- [Netlify](https://www.netlify.com/) — Deployment

## Features

- Single-page portfolio with Hero, About, Services, Skills, Experience, CTA, and Footer sections
- Responsive mobile-first design
- Accessible landmarks, skip link, focus states, and reduced-motion support
- Type-safe data-driven content
- SEO meta tags, canonical URL, Open Graph tags, and JSON-LD person schema
- Palette-driven design system based on supplied navy, blue, sky, and pale lime colors

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── assets/images/       # Profile picture, icons
│   ├── components/
│   │   ├── layout/          # Header, footer
│   │   ├── sections/        # Hero, About, Services, Skills, Experience, CTA
│   │   └── ui/              # Shared presentational components
│   ├── data/                # Profile, experiences, connect links
│   ├── styles/              # global.css
│   ├── types/               # TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── bun.lock
├── tsconfig.json
└── package.json
```

## Commands

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `bun install`  | Install dependencies                   |
| `bun run dev`  | Start dev server                       |
| `bun run build` | Build production site to `./dist/`    |
| `bun run preview` | Preview build locally before deploying |
