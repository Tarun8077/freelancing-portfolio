# Tarun Sherwal — Portfolio · Build Progress (TODO)

Premium freelance-client portfolio. Stack: React + Vite, Tailwind CSS, Framer Motion,
React Router, React Icons, Lenis, EmailJS, React Helmet.
Theme: Luxury black (#0A0A0B) + electric blue (#2563EB).

**Rules:** Build milestone by milestone. Stop after each milestone. Update this file after each
milestone. This file lists **all remaining work** until the site is production-ready & deployed.

Legend: ✅ done · 🔄 in progress · ⬜ not started

---

## ✅ Milestone 1 — Foundation  (DONE · verified: clean build + dev 200)
- [x] Vite + React scaffold, all dependencies installed
- [x] Tailwind v3 config — full design system (colors, fluid type, spacing, shadows, keyframes)
- [x] Global styles (`index.css`) — fonts (Satoshi/Inter/JetBrains Mono), scrollbar, focus, reduced-motion
- [x] Folder architecture: `components/{layout,ui,common}`, `sections/`, `data/`, `hooks/`, `lib/`, `pages/`
- [x] Theme system (luxury black + electric blue)
- [x] Routing (React Router: Home + 404) + SEO component (React Helmet)
- [x] Lenis smooth scroll + scroll progress bar
- [x] Navbar (glass, scroll-spy active link, Résumé + CTA, animated mobile overlay)
- [x] Footer (brand, nav, connect, CTA, socials, back-to-top)
- [x] Reusable UI: Button, Reveal, SectionHeading, StatusBadge, Logo
- [x] Data layer: site, services, projects, content
- [x] Branded TS favicon, index.html meta

---

# ⬜ REMAINING WORK

## ✅ Milestone 2 — Hero  (DONE · verified: clean build + dev 200)
- [x] Hero section layout (left-aligned, editorial) + scroll-margin anchor
- [x] Breathing electric-blue aura background (animated) — `HeroBackground`
- [x] Faint line grid, radially masked + bottom fade for depth
- [x] Status badge (Available for work, pulsing dot)
- [x] H1 headline with "grow your business" blue keyword + animated underline
- [x] Sub-headline copy
- [x] Dual CTAs: "Start a Project →" + "View My Work"
- [x] Trust micro-line (Greater Noida · clients worldwide)
- [x] Profile image treatment (`ProfileImage`: framed, glow, floating chips, /profile.jpg fallback)
- [x] Scroll indicator (animated down cue) — `ScrollIndicator`
- [x] Staggered Framer Motion entrance
- [x] Respect reduced-motion (global + count hook)

## ✅ Milestone 3 — About / Skills / Counters  (DONE · verified: clean build + lint + dev 200)
- [x] About section: photo (dark bg) + 3-paragraph story
- [x] "I care about your business, not just your code" heading
- [x] Value chips (business-first, performance, communication, on-time)
- [x] Animated counters / stats row (count-up on scroll — `AnimatedCounter` + `useCountUp`)
- [x] Capabilities section: skills grouped (Frontend / Backend / Data & AI / Tools)
- [x] Skill pills muted → accent on hover (border + bg ignite)
- [x] Section reveal animations (stagger + fadeUp/scaleIn, reduced-motion safe)

## ✅ Milestone 4 — Services  (DONE · verified: clean build + lint + dev 200)
- [x] Services section header (01 — Services)
- [x] Bento grid (2 featured wide cards: Full-Stack, AI) + standard cards (`grid-flow-dense`)
- [x] Service card component (`ServiceCard`: icon, title, benefit line)
- [x] Hover interactions (lift + blue border ignite + icon brighten + featured aura wash)
- [x] Responsive 3→2→1 columns
- [x] Soft closing CTA ("Let's talk →")

## ✅ Milestone 5 — Projects / Case Studies  (DONE · verified: clean build + lint + dev 200)
- [x] Selected Work header (02 — Selected Work)
- [x] Alternating full-width feature rows (image ⇄ text, `reversed` per index)
- [x] Project card: browser-framed screenshot + fallback, category tag, title, description, tech pills
- [x] "View Live →" + "Code" buttons per project
- [x] Project filtering (All / Websites / AI / Data) with animated layout (`AnimatePresence` + `layoutId` pill)
- [x] Image hover zoom + per-project accent glow, lazy-loaded images
- [x] Closing CTA ("Start a Project →")

## ✅ Milestone 6 — Process / Why / FAQ / Testimonials  (DONE · verified: clean build + lint + dev 200)
- [x] Process section (04 — How We Work): 4-step timeline (horizontal desktop / vertical mobile)
- [x] Process step (number, icon, title, description) + connecting accent line (h/v)
- [x] Why Work With Me: 3 value cards (interim social proof)
- [x] Testimonials placeholder (design slot in WhyMe, ready to swap real quotes)
- [x] FAQ section (07 — FAQ): `Accordion` (rotate chevron, animated height open/close, a11y)
- [x] All copy wired from data layer (`processSteps`, `whyReasons`, `testimonials`, `faqs`)

## ✅ Milestone 7 — Contact / EmailJS  (DONE · verified: clean build + lint + dev 200)
- [x] Contact section (08 — Let's Talk) with returning blue aura (breathing)
- [x] Big heading + reply-time promise
- [x] Contact form: Name, Email, Service (select), Budget (select), Message
- [x] EmailJS integration (`send`, loading/success/error states + graceful fallback until keys set)
- [x] Form validation + accessible labels/errors (aria-invalid, aria-describedby, role=status)
- [x] Copyable email with "Copied!" toast
- [x] Direct email + LinkedIn + GitHub icon buttons
- [x] Résumé download button wired

## ✅ Milestone 8 — SEO / Perf / A11y / Cleanup  (DONE · verified: clean build + lint + dev 200)
- [x] Per-section SEO meta finalize + JSON-LD (`personJsonLd` Person schema via `Seo jsonLd`)
- [x] OG image + Twitter card verified (dimensions + image alt + og:locale wired; asset drop-in pending)
- [x] `robots.txt` + `sitemap.xml` (in `public/`, verified copied to `dist/`)
- [x] Lazy-load below-the-fold sections (React.lazy + Suspense in Home) + images (`loading="lazy"`)
- [x] Code-split, fonts moved to `index.html` for early discovery (main chunk 470→72 kB; vendor/motion split)
- [x] Accessibility pass (skip-to-content link, landmarks, alt text, aria on form/nav/accordion, focus-visible)
- [x] Reduced-motion audit (global CSS media query + Framer `MotionConfig reducedMotion="user"` + count hook)
- [x] Remove dead code (deleted `TrustBar` + `_Placeholder`), final lint clean
- [~] Lighthouse run + fixes — optimizations complete; audit itself deferred to browser/deploy (Milestone 9, no Chrome in this env)

## ⬜ Milestone 9 — Deploy & Handover  (final)
- [ ] `.env` set with real EmailJS keys
- [ ] Add all client assets (see below)
- [ ] Production build sanity check
- [ ] SPA redirect config (Netlify `_redirects` / Vercel rewrites) for 404 route
- [ ] Deploy (Netlify/Vercel) + custom domain (optional)
- [ ] Verify live: forms send, links work, mobile, share preview
- [ ] README with setup/deploy instructions

---

## Assets — QA pass status
- [x] `public/og-image.png` — 1200×630 branded social card (generated via `scripts/optimize-assets.mjs`)
- [x] `public/projects/*.webp` — all 3 screenshots optimized (5.3 MB → 241 KB total)
- [x] Profile photo → `public/profile.webp` (optimized: 800px-wide WebP, 40 KB)
- [x] Real testimonial slot — replaced placeholder with genuine first-person commitment
- [ ] `public/resume.pdf` — **still required from client** (Résumé buttons 404 until dropped in)
- [ ] `.env` with EmailJS keys (form has graceful fallback until then — copy from `.env.example`)

## ✅ Milestone 8.5 — Production QA pass  (DONE)
- [x] Optimized all images to WebP (screenshots + portrait) → ~5.7 MB saved, huge LCP win
- [x] Generated branded 1200×630 OG image; static OG/Twitter/canonical/robots meta in index.html
- [x] Bumped `muted` colour #6B6B73 → #82828B to pass WCAG AA contrast (was 3.75:1, now 5.2:1)
- [x] Mobile menu: role=dialog + aria-modal + Escape-to-close; active nav link aria-current
- [x] Preload hero portrait (LCP), decoding=async + correct width/height on all images (no CLS)
- [x] Nav order aligned to page flow; Lenis scroll offset aligned to scroll-mt (96px)
- [x] Removed dead code (`Reveal.jsx`) + junk assets (`icons.svg`, `desktop.ini`)
- [x] Clean lint + production build verified; preview serves all routes/assets 200

## ⬜ Nice-to-have / future (post-launch, optional)
- [ ] Per-project case-study detail pages (Problem → Solution → Result)
- [ ] Analytics (Plausible / GA)
- [ ] Blog / notes for SEO
- [ ] "Available for N projects this month" scarcity line (if true)

---

## How to run
```
cd tarun-portfolio
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # preview the production build
```
