# Kapoor's Villa 

A high-performance, visually stunning web application for **Kapoor's Villa**, a luxury boutique homestay located in the serene Panchgani-Mahabaleshwar belt of Satara, Maharashtra. 

This project is built with a focus on luxury aesthetics, seamless user experience, traditional Search Engine Optimization (SEO), and Generative Engine Optimization (GEO) for AI search engines like Perplexity, ChatGPT, and Google AI Overviews.

---

## ✨ Key Features

* **Modern Tech Stack:** Built using the latest Next.js 16 (App Router) and React 19.
* **Luxury UI/UX:** Styled with Tailwind CSS v4, featuring a responsive design that seamlessly supports both Light and Dark modes.
* **Fluid Animations:** Custom reveal, scroll, and stagger animations powered by Framer Motion.
* **Interactive Components:** Accessible and highly polished UI components using Shadcn UI and Radix Primitives.
* **Media-Rich Galleries:** Touch-friendly image carousels using Embla Carousel to showcase rooms, outdoor spaces, and dining.
* **SEO & GEO Optimized:** Automated sitemaps, robots.txt, dynamic OpenGraph images, and injected JSON-LD schema markup (`LodgingBusiness`, `FAQPage`, `HotelRoom`) for maximum visibility.
* **AI Readiness:** Includes a `public/llms.txt` file serving as a direct context feed for AI web crawlers.

---

## 🛠️ Tech Stack

**Frontend Framework:**
* [Next.js 16](https://nextjs.org/) (App Router)
* [React 19](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)

**Styling & UI:**
* [Tailwind CSS v4](https://tailwindcss.com/)
* [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
* [Framer Motion](https://motion.dev/)
* [Lucide React](https://lucide.dev/) (Icons)

---

## 📂 Project Structure

```text
kapoors-villa/
├── app/                  # Next.js App Router definitions
│   ├── about/            # Our Story & Heritage page
│   ├── contact/          # Booking & Contact details
│   ├── gallery/          # Visual narrative & estate photos
│   ├── menu/             # Pure Veg dining & BBQ menu
│   ├── room/             # Luxury suites & amenities
│   ├── og/               # Dynamic OpenGraph image generation
│   ├── layout.tsx        # Global layout, fonts, and JSON-LD
│   └── page.tsx          # Landing page
├── components/           # Reusable React components
│   ├── animations/       # Framer Motion animation wrappers (FadeIn, ScaleIn, etc.)
│   ├── ui/               # Shadcn UI primitive components
│   ├── Navbar.tsx        # Responsive top navigation
│   ├── Footer.tsx        # Global footer
│   ├── FAQsection.tsx    # FAQ with Schema injection
│   └── LocationSection.tsx # Distance & Map benchmarks
├── lib/                  # Utility functions
└── public/               # Static assets (images, PDFs, llms.txt)
🚀 Getting Started
Prerequisites
Ensure you have Node.js (v20 or higher) and npm installed on your machine.

Installation
Clone the repository:

Bash
git clone [https://github.com/your-username/kapoors-villa.git](https://github.com/your-username/kapoors-villa.git)
cd kapoors-villa/frontend
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.

🧠 AI Agent & Contributor Guidelines
If you are contributing to this project or running AI code-generation agents against this repository, please adhere to the following rules (detailed in AGENTS.md and CLAUDE.md):

Next.js App Router Compliance: Default to React Server Components (RSC). Only use 'use client' at the top of components that strictly require browser APIs, state, or hooks.

Component Modularity: Keep app/ routes clean. Extract complex logic and UI elements into the components/ directory.

Structured Data: Always include relevant JSON-LD schemas (e.g., BreadcrumbList, HotelRoom) for new pages to maintain GEO/SEO integrity.

Distance Benchmarks: Maintain absolute consistency with the official property distances: Nirwana (2 km), Bhilar (12 km), Mapro Garden (16 km), Panchgani (17 km), Mahabaleshwar (26 km).

LLM Context: If adding new features or routes, ensure public/llms.txt is updated to reflect the changes.

🚢 Deployment
This project is optimized for deployment on Vercel.

To deploy:

Push your code to a Git repository (GitHub/GitLab/Bitbucket).

Import the project into your Vercel dashboard.

Vercel will automatically detect Next.js and configure the build settings.

Bash
# Manual Build Command
npm run build

# Start Production Server
npm run start
Crafted with elegance for Kapoor's Villa ❤️.
