# Dylan Huynh — Portfolio

Portfolio website for Dylan Huynh — an independent studio crafting social media, editorial photography, and digital design for ambitious brands.

**Demo:** [dylan-huynh.vercel.app](https://dylan-huynh.vercel.app/)

---

## Sections

| Section | Description |
|---|---|
| **Intro Loader** | Full-screen loading overlay with animated counting and staggered reveal of "DYLAN HUNNH" |
| **Hero** | Light-background (`#f7f7f5`) splash with "CREATIVE FORCE / DIGITAL DESIGN" heading, draggable 3D-tilt gallery, and auto-scroll marquee of images |
| **Stats** | Counter strip (Projects / Awards / Years / Clients) with animated CountUp on scroll |
| **Photography** | 5-image editorial grid (demo 1–5) with GSAP grayscale-to-color scroll-triggered reveal |
| **Design** | 5-image design showcase (demo 6–10) with GSAP blur-to-clear scroll-triggered reveal |
| **Footer / Contact** | Mad Libs-style contact form with Radix Select dropdowns for budget and service, split backdrop image, Autosynapse credit |

---

## Features

- **Adaptive Navbar** — IntersectionObserver on `#top` detects hero visibility; toggles text/background between light (hero) and dark (rest of page); "Start a project" button turns orange (`ember`) when hero is in view
- **Draggable Gallery** — framer-motion drag with momentum, 3D tilt per card via `useTransform`, seamless loop via duplicated track (51 images), auto-scroll pauses on drag
- **GSAP Scroll-Triggered** — photography section fades in from grayscale to color; design section unblurs on scroll
- **CountUp** — custom React component using `requestAnimationFrame` with cubic ease-out, triggered by IntersectionObserver at 30% threshold
- **Mad Libs Form** — inline inputs form a sentence: "I'm [name] at [email], looking for [service] with a budget of [budget]" — mock submit with alert
- **Smooth Scrolling** — `scroll-behavior: smooth`, `scroll-padding-top: 5rem` on `<html>`

---

## Stack

| Layer | Technology |
|---|---|
| Framework | **React 19** + **TypeScript** |
| Build | **Vite** |
| Routing | **TanStack Router** (file-based) |
| Styling | **Tailwind CSS** |
| Animation | **GSAP** + **ScrollTrigger** + **framer-motion** |
| UI | **Radix UI** (`@radix-ui/react-select` via shadcn/ui) |
| Fonts | **Inter** (body), **Syne** (display), **JetBrains Mono** (mono) |

---

## Setup

```bash
bun install
bun run dev         # dev server at localhost:5173
bun run build       # production build → dist/
bun run preview     # preview production build
```

---

## Image Assets

All images served from `public/assets/`:

| Folder | Contents |
|---|---|
| `public/assets/hero/` | (for draggable gallery) |
| `public/assets/` | (photography & design), (about backdrop), (footer bg) |

---

## Theme

| Token | Value | Usage |
|---|---|---|
| `ink` | `#0b0b0b` | Dark background, text on hero |
| `cream` | `#f7f7f5` | Light text on dark, hero background |
| `ember` | `#d4783b` | Accent / CTA button |

---

## Architecture

Single-file app in `src/routes/index.tsx` (~850 lines). All components — Intro loader, Hero gallery, Stats counters, Photography grid, Design grid, About section, and Footer form — live in one file. No state management library; local `useState` / `useRef` / IntersectionObserver patterns.

Key dependencies:
- **GSAP** (`gsap`, `@gsap/react`, `gsap/ScrollTrigger`) — photography grayscale animation, design blur animation, intro loader exit
- **framer-motion** (`motion`, `useMotionValue`, `useSpring`, `useTransform`, `animate`) — draggable gallery, 3D tilt, auto-scroll marquee loop
- **Radix Select** (`@radix-ui/react-select`) — contact form dropdowns
