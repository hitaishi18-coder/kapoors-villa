@AGENTS.md

# Kapoor's Villa - Project Guide & AI Context

## Overview

Kapoor's Villa is a luxury boutique homestay & villa application.

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, Shadcn UI, Framer Motion.
- **Backend:** Python (FastAPI).
- **Location Context:** Panchgani & Mahabaleshwar belt, Satara, Maharashtra, India.

---

## Command Reference

### Frontend (`/frontend`)

- **Dev Server:** `npm run dev`
- **Build Production:** `npm run build`
- **Lint Code:** `npm run lint`
- **Package Manager:** `npm`

### Backend (`/backend`)

- **Start API Server:** `uvicorn main:app --reload`

---

## Architectural & Coding Standards

### 1. Next.js App Router Rules

- Default to **React Server Components (RSC)**. Only add `'use client'` at the top of components that require state, hooks, or event listeners (e.g., accordions, toggles).
- Keep pages inside `app/` clean. Move reusable UI elements into `components/` and animation logic into `components/animations/`.

### 2. SEO & GEO (Generative Engine Optimization) First

- **Metadata:** Every route must expose page-level `export const metadata: Metadata`.
- **Structured Data (JSON-LD):** Always inject `https://schema.org` JSON-LD schemas (`LodgingBusiness`, `FAQPage`, `HotelRoom`, `BreadcrumbList`) using safe `<script>` tags.
- **Image Optimization:** ALWAYS use Next.js `<Image />` with descriptive `alt` tags mentioning "Kapoor's Villa" and relevant amenities/rooms.
- **AI Citation Feed:** Maintain and update `frontend/public/llms.txt` whenever new pages, rooms, or amenities are added.

### 3. Styling & Theme

- Use **Tailwind CSS** utility classes.
- Support both **light and dark modes** seamlessly using CSS variables (`dark:bg-slate-900`, etc.).
- Maintain luxury branding tone (dark slate, gold accents, clean serif/sans-serif typography).

---

## Property Domain Knowledge (Ground Truths)

- **Property Name:** Kapoor's Villa
- **Amenities:** Private Pool, In-villa Dining / Menu, Luxury Suites, Air Conditioning, Free Wi-Fi, Lawn.
- **Location Distances:**
  - Nirwana: 2 km (~5 mins)
  - Bhilar (Book Village): 12 km (~20 mins)
  - Mapro Garden: 16 km (~25 mins)
  - Panchgani Town: 17 km (~30 mins)
  - Mahabaleshwar Market: 26 km (~45 mins)
