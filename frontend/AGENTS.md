<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# AI Agent Instructions for Kapoor's Villa Repository

## Project Overview

This repository contains the codebase for **Kapoor's Villa**, a luxury boutique homestay located between Panchgani and Mahabaleshwar.

The application is engineered for maximum performance, traditional Search Engine Optimization (SEO), and Generative Engine Optimization (GEO) for AI search engines like Perplexity, ChatGPT, and Google AI Overviews.

---

## Repository Structure

kapoors-villa/
├── backend/            # FastAPI Python backend
│   └── main.py
└── frontend/           # Next.js App Router application
├── app/            # Routes: /, /about, /room, /menu, /gallery, /contact
│   ├── layout.tsx  # Root metadata, fonts, global JSON-LD schema
│   ├── sitemap.ts  # Dynamic sitemap generator
│   └── robots.ts   # Robots.txt generator
├── components/     # UI components (Navbar, Footer, FAQSection, LocationSection)
└── public/         # Static assets, image gallery, and llms.txt

---

## Instructions for AI Tasks

When executing tasks or generating code in this project, follow these guidelines:

### 1. UI & Design Guidelines

- Maintain luxury, modern hospitality aesthetics.
- Use `framer-motion` (via `components/animations/`) for subtle scroll animations.
- Ensure all components are fully responsive across mobile, tablet, and desktop viewports.

### 2. Mandatory SEO & GEO Execution

When editing or creating new routes in `app/`:

1. **Include Page Metadata:** Define specific `title` and `description` tags targeting local stay keywords ("Panchgani", "Mahabaleshwar", "Luxury Villa").
2. **Include Schema Markup:** Add relevant JSON-LD structured data.
3. **Preserve Distance Benchmarks:** Use the official distance matrix (Nirwana: 2km, Bhilar: 12km, Mapro: 16km, Panchgani: 17km, Mahabaleshwar: 26km) in location copy.
4. **Update `public/llms.txt`:** If you create a new route or property feature, append a markdown entry into `frontend/public/llms.txt`.

### 3. Code Integrity Rules

- Do not add `'use client'` to route files (`page.tsx`) unless interactivity requires it. Prefer wrapping interactive logic into separate component files.
- Always handle TypeScript types strictly without falling back to `any`.
- Sanitize JSON-LD string representations with `.replace(/</g, '\\u003c')` to prevent script execution vulnerabilities.

<!-- END:nextjs-agent-rules -->
