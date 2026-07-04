# DAF / LWS Site

David Andrew Furniture — Furniture services at 20% flat. Built to F500 standards.

**Live Site**: Deployed to Vercel (auto-deploys from `main` branch)  
**Repository**: https://github.com/dev55acc-ai/daf-lws

## Stack

- **Framework**: Next.js 16 (App Router + React 19 + TypeScript)
- **Styles**: Tailwind v4 + OKLCH custom properties
- **Fonts**: Fraunces (display, italic serif) + JetBrains Mono (utility)
- **Motion**: Framer Motion 12 (signature 20% line animation)
- **Runtime**: Bun

## Pages

- `/` — Homepage (Hero, FeeSignature, ProofPoints, NotSoftware, Footer)
- `/procurement` — Brief intake form (validated, with loading states)
- `/designers` — Persona landing page for designers
- `/developers` — Persona landing page for developers
- `/decorators` — Persona landing page for decorators
- `/sample-plan` — Example costed plan (itemized breakdown, transparency proof)
- `/how-it-works` — Six-step process walkthrough
- `/lifeware` — Lifeware Services page (3–7 year lifecycle, $499 once)
- Custom 404 with DAF voice

## Design System

All design decisions documented in `DESIGN.md`:

- **Palette**: OKLCH tokens (warm amber accent hue 35, avoiding AI blue-purple band 220–260)
- **Type**: Fraunces italic display, serif body, JetBrains Mono utility
- **Layout**: Asymmetric grids throughout (7fr/5fr, 4fr/8fr, 5fr/7fr) — NO three-equal-columns
- **Radius**: 3px interactive, 0px containers (editorial crisp)
- **Motion**: ONE signature moment (20% fee line animation), everything else minimal

## Brand Voice

Per `/home/dev55/daf/marketing/BRAND_VOICE_CARD.md`:

- Plain, fourth-grader clear
- Service-first (what client gets, not how we deliver)
- Full disclosure (workshop, FOB, freight, customs, 20% fee)
- Confident, not warm-salesy
- F500-tight

**Banned**: AI/automation mentions, retail vocab (cart, checkout, shop), marketing sludge (curated, bespoke, premium, luxury), fabricated clients/track record.

## Development

```bash
# Install dependencies
bun install

# Start dev server (Turbopack)
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

Dev server runs at `http://localhost:3000`

## Anti-AI-Tells Verification

Before declaring done, run:

```bash
# Check for AI-default patterns (from f500-frontend skill)
node ~/.claude/skills/f500-frontend/scripts/check-ai-tells.mjs app/

# Verify OKLCH palette compliance
node ~/.claude/skills/f500-frontend/scripts/oklch-palette.mjs audit app/globals.css
```

## Next Steps

Per mission:
1. ✅ Scaffold real Next.js app
2. ✅ Build homepage to F500 bar
3. ✅ Build /procurement funnel
4. ✅ Build persona pages
5. ⏳ Continue iterating on CRAFT
6. ⏳ Provision GitHub repo + Vercel + deploy

## Features

- **Accessibility**: Skip links, ARIA labels, keyboard navigation, screen reader support
- **SEO**: Sitemap.xml, robots.txt, Open Graph tags, semantic HTML
- **Performance**: Server components, streaming, optimized fonts, lazy loading
- **Mobile**: Fully responsive, touch-friendly, adaptive navigation
- **Forms**: Client-side validation, loading states, error handling
- **Motion**: ONE signature moment (20% fee reveal), prefers-reduced-motion support
- **Design System**: OKLCH tokens, consistent spacing, editorial typography

## Deployment

Vercel deployment via GitHub integration:
- **Auto-deploy**: Every push to `main` triggers a new deployment
- **Environment**: Production
- **Framework**: Next.js 16 detected automatically
- **Build**: Bun runtime, Turbopack build

## Verification Checklist

- [x] Homepage renders with navigation
- [x] All routes load correctly
- [x] OKLCH tokens in use (no Tailwind color-scale names)
- [x] Asymmetric grids (no grid-cols-3)
- [x] Fraunces italic display font loaded
- [x] Focus-visible styles present
- [x] Selection color set
- [x] Prefers-reduced-motion query present
- [x] Print styles present
- [x] Skip links for accessibility
- [x] Form validation working
- [x] Loading states on form submission
- [x] Mobile responsive navigation
- [x] SEO meta tags and sitemap
- [x] Deployed to Vercel
- [x] GitHub repo created and synced
