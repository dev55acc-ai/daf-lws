# DESIGN.md

## 1. Subject
Furniture services business — sourcing from verified workshops, landed through customs, installed at 20% flat fee with full cost disclosure.

## 2. Audience
Designers, developers, decorators, and property decision-makers furnishing serious spaces (up to million-dollar contracts) who value transparency and service over retail showroom markup.

## 3. Single job of the page
Move the reader from "I've never heard of DAF" to "I want to submit a brief via /procurement" by proving we disclose everything retail hides.

## 4. Visual thesis (one paragraph)
Editorial density with breathing room. Warm off-white ground (not gray-50, not pure white). Fraunces italic serif display face carrying weight and emphasis. Asymmetric grid throughout — 7fr/5fr hero with pull-quote rail, 4fr/8fr for service chapters with sticky headers. ONE signature moment: the 20% fee number occupies half the viewport with a horizontal amber line that draws beneath it on scroll-enter (scaleX 0→1, 1400ms custom cubic). No fade-up-on-scroll elsewhere — static editorial confidence. Tight radius on interactive elements (3px), zero radius on containers. No default shadows; hairline borders where separation is needed.

## 5. Palette (OKLCH — banned hues 220–260)
| token | value | role |
|---|---|---|
| --background | oklch(0.96 0.012 55) | warm off-white ground |
| --ink | oklch(0.18 0.015 25) | body + display text |
| --accent | oklch(0.48 0.16 35) | signature moments, links, the 20% line |
| --stone | oklch(0.58 0.008 30) | quiet meta, captions, eyebrows |
| --surface | oklch(0.92 0.01 50) | elevated panels, cards |
| --border | oklch(0.82 0.01 45) | hairline separators |

Rationale: Warm amber accent (hue 35) — outside the AI blue-purple band, recalls transparency/craft. Warm neutrals avoid the cold gray-scale default. Six tokens cover all use cases without needing Tailwind color scales.

## 6. Type (three roles, non-obvious)
| role | face | weight | tracking | usage |
|---|---|---|---|---|
| display | Fraunces (italic) | 400, 600 | -0.02em | h1, h2, pull quotes, signature stat |
| body | system-ui serif fallback → Georgia | 400 | 0.005em | paragraphs, long-form content |
| utility | JetBrains Mono | 500 | 0.28em | eyebrows, FOB/freight data, captions |

Ban: Inter alone, Geist alone, Roboto, Poppins alone, Playfair+Inter combo.

## 7. Type scale (fluid clamp)
```css
h1 { font-size: clamp(42px, 7.2vw, 104px); line-height: 0.94; letter-spacing: -0.02em; }
h2 { font-size: clamp(32px, 4.8vw, 68px);  line-height: 1.04; letter-spacing: -0.015em; }
h3 { font-size: clamp(20px, 2vw, 28px);    line-height: 1.22; letter-spacing: -0.01em; }
p  { font-size: clamp(15px, 1.1vw, 17px);  line-height: 1.65; letter-spacing: 0.005em; }
utility { font-size: clamp(11px, 0.9vw, 13px); letter-spacing: 0.28em; text-transform: uppercase; }
```
Display tightens at large sizes, body opens slightly. Different tracking per role.

## 8. Layout thesis (asymmetric ratios)
| section | grid | rationale |
|---|---|---|
| hero | 7fr 5fr | headline + subhead left, pull-quote rail right |
| service chapters | 4fr 8fr | sticky chapter title left, content right |
| fee signature | full-bleed | the 20% number centered but asymmetric line beneath |
| proof points | 5fr 7fr | caption left, fact-block right |
| signoff / CTA | 8fr 4fr | headline + /procurement CTA left, meta right |

Ban: `grid-cols-3`, `md:grid-cols-3`, any three-equal-column card row. Every grid has disagreeing fractions.

## 9. Radius (two disagreeing radii)
| element | value |
|---|---|
| interactive (buttons, chips, inputs) | 3px |
| containers (cards, panels, sections)  | 0 (crisp editorial) |

Ban: `rounded-2xl` on cards, single-radius-everywhere, rounded-full buttons.

## 10. Shadow (killed)
No default `shadow-lg`. Elevation expressed through hairline borders (`border-border`) or layered shadows when absolutely required (ONE tight + ONE diffuse, custom values). Default is flat with border separation.

## 11. Motion signature (ONE moment)
The 20% fee number section: a horizontal amber line (--accent, 2px height) draws beneath the fee stat from scaleX(0) to scaleX(1) over 1400ms with cubic-bezier(0.22, 1, 0.36, 1) when the section enters viewport at 35% threshold. The number itself fades from opacity 0.3 to 1 simultaneously. Everything else on the page: static OR subtle 800ms opacity 0→1 reveal only (no translate, no scale). No fade-up-on-every-section. No hover:scale-105. No framer-default spring.

Ban: fade-up-on-scroll for every section, hover:scale-105 on cards, stiffness:100/damping:10 defaults.

## 12. Micro-copy voice
Declarative. Fourth-grade plain English. No marketing adjectives. No em-dashes as decoration (one per page maximum). Numbers as numerals for all prices, costs, and the 20% fee. Short sentences. One idea at a time. Service-first: describe what the client gets, never how we deliver internally. Full disclosure on every cost component. Confident, not warm-salesy. F500-tight: say three things perfectly, not forty things averagely.

## 13. Banned words (DAF-specific)
- elevate, reimagine, unlock, seamless, frictionless, empower
- curated, bespoke, premium, luxury, white-glove, concierge
- artisan, heritage, timeless, world-class
- thoughtful touch, dream space, dream home
- "Build the future", any three-word hero without substance
- cart, buy now, checkout, shop, store, discount, sale, product, items (retail vocab)
- AI, agent, engine, automation, LLM, orchestration (the machine vocab)

## 14. Signature element (the one memorable moment)
The half-viewport 20% fee stat in Fraunces italic 600, centered, with the horizontal amber line drawing beneath it on scroll-enter. This is the only moment that competes for attention. Everything else supports it.

## 15. Verification
Before shipping:
- `node ~/.claude/skills/f500-frontend/scripts/check-ai-tells.mjs src/` — must exit 0
- `node ~/.claude/skills/f500-frontend/scripts/oklch-palette.mjs audit src/app/globals.css` — must exit 0
- Screenshot at 50cm: first pattern-match must NOT be "clean SaaS" or "Tailwind landing page"
- Print preview (Cmd+P): legible artifact, not a screenshot of dark hero
- prefers-reduced-motion: all animations disable
- Keyboard-only (Tab): focus visible on every interactive element
- Voice score: ≥85 against ~/daf/marketing/BRAND_VOICE_CARD.md, zero banned words
