# Reem Portfolio

The personal portfolio website of **Reem Samy**, built from an original Figma design.

> **Status:** In development. The project foundation is set up, and pages are being built section by section from the design.

## Tech stack

| Area | Technology |
| --- | --- |
| UI | [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| Build tool | [Vite](https://vite.dev) |
| Routing | [React Router](https://reactrouter.com) (data mode) |
| Styling | CSS Modules + CSS custom properties (design tokens) |
| Backend | [Supabase](https://supabase.com) |
| Code quality | ESLint (type-aware TypeScript rules) |
| Hosting | Hostinger |

## Getting started

### Prerequisites

- Node.js **22.22 or newer**
- npm

### Setup

```bash
npm install
cp .env.example .env.local   # then fill in the public Supabase values
npm run dev
```

The development server runs at <http://localhost:5173>.

### Environment variables

| Variable | Description |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase **publishable** (public) key |

Every `VITE_` variable is bundled into the public website, so only public values belong here. Secret and service-role keys are never used in this project. Environment files are excluded from Git, except for `.env.example`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the project with ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run check` | Lint, type-check, and build (run before every push) |

## Project structure

```text
src/
├── assets/          Static assets imported by components
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/      Reusable UI components
├── config/          App configuration (routes, environment)
├── hooks/           Custom React hooks
├── layouts/         Page layouts shared across routes
├── pages/           Route-level page components
├── services/        External integrations (Supabase client and data access)
├── styles/          Global styles and design tokens
├── types/           Shared TypeScript types
├── utils/           Pure helper functions
└── main.tsx         Application entry point
```

Components are organised by folder, with the component and its styles side by side:

```text
ComponentName/
├── ComponentName.tsx
└── ComponentName.module.css
```

## Deployment

The site is built as a static single-page application (`npm run build`) and deployed to a custom subdomain on Hostinger.

## AI-assisted development

This project is developed with the assistance of [Claude Code](https://claude.com/claude-code), an AI coding assistant by Anthropic, working under my direction.

- **My work:** the visual design (created in Figma), the content, and all design and product decisions.
- **AI-assisted work:** implementing code, configuring tooling, and writing documentation from my design specifications and instructions.

This disclosure covers the whole repository, so individual commits don't carry an AI co-author line.

## License and credits

Copyright © 2026 Reem Samy. All rights reserved.

The design, content, and images in this repository are the original work of Reem Samy. They may not be reused without permission. Third-party open-source dependencies remain under their own licenses.
