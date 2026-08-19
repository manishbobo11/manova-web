# Manova Website

This folder contains the **Manova marketing website only**. It is a self-contained
Vite + React app and can be developed, built and run independently of everything
else in this repository.

## Running it

```bash
cd website
npm install
npm run dev      # http://localhost:5173
npm run build
```

The dev server proxies `/api` to `http://localhost:8001` (see `vite.config.js`),
which is the backend that still lives at the repository root. The website does not
require the backend to be running — nothing on the site calls it today.

## What this folder is

Marketing and information content only. The Manova product experience — conversation,
the Human Model, patterns, reflections, safety — is **mobile only** (iOS and Android).

This website must never contain:

- product login or signup (a private-beta email capture is not product auth)
- AI chat, or any call to an AI provider
- a dashboard, assessment, survey, or wellness score
- conversation history or any user product data

The routes are: `/`, `/why-manova`, `/how-it-works`, `/human-model`, `/safety`,
`/privacy`, `/philosophy`, `/about`, `/download`, plus a catch-all 404.

## Repository layout after the website separation

```
manova2-main/
├── website/          ← this folder: the website, and nothing else
│   ├── src/          ← 25 website source files
│   ├── public/       ← website static assets
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.cjs
│
├── src/              ← LEGACY product code (158 files). Not the website.
├── server.js         ← backend
├── routes/           ← backend
├── controllers/      ← backend
├── pages/api/        ← backend endpoints (not website pages)
├── manova-backend/   ← backend
└── test-*.js         ← backend/AI test scripts
```

### Why there is still a `src/` at the repository root

The root `src/` holds legacy product code from the pre-separation app — the old
authenticated experience (chat, dashboard, survey, mood tracking) and the AI service
layer. None of it is reachable from the website.

It was deliberately **not** moved here and **not** deleted, for one concrete reason:
several root-level `test-*.js` scripts import from `src/services/ai/`, so those files
are a live dependency of the backend test scripts. Moving them would break those
scripts; deleting them would lose code that has not been formally retired.

Treat root `src/` as dormant. Do not import from it into this folder — the website
must stay independently buildable.

## Duplicated config files

`package.json`, `package-lock.json` and `eslint.config.js` were **copied** here rather
than moved, so the backend at the root keeps working unchanged.

Two consequences worth knowing:

1. **`package.json` here is currently a verbatim copy** and therefore still lists
   backend dependencies (`express`, `cors`, `dotenv`, `openai`, `langchain`,
   `@pinecone-database/pinecone`, `pinecone-client`, `axios`) that the website does not
   use. It also still contains a `server` script that will not work from this folder,
   because `server.js` lives at the repository root. Trimming this file to the website's
   real dependency set is a deliberate follow-up, not an oversight.

2. **These files now exist in two places and can drift.** If you change dependencies,
   decide which copy is authoritative and update both, or split them properly.

## Brand assets

The official Manova brand asset library lives outside this repository, at
`Desktop/manova-v2/apps/Brand` (logo, symbol, website navbar logos, favicon set,
mode backgrounds, icons, social). Reuse those assets — do not create new logos or
brand marks.

The current favicon and Open Graph image still point at `public/logo/manova-logo.png`,
a 1024×1024 PNG with no alpha channel and a baked-in background. Replacing it with the
real brand assets is an open task.
