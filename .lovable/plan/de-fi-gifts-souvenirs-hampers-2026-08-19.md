# de-fi — Gifts. Souvenirs. Hampers.

A premium gifting site that feels like unwrapping a beautifully packaged gift, built on the brand's deep purple and gold.

## The feeling

Deep luxe: a rich aubergine canvas, gold foil accents, generous space, slow cinematic reveals. No generic storefront grid — sections unfold like layers of wrapping: ribbon lines, lids that lift, cards that reveal on scroll.

- Palette: deep purple base (#4B0A9E family), gold (#FFC907), soft ivory text, muted violet surfaces.
- Type: an elegant display serif for headlines paired with a clean geometric sans for body and labels.
- Motion: reveal-on-scroll, gentle parallax on hero, hover states where product cards "open" slightly. Restrained, never bouncy.
- Logo used as the mark in the header, footer and favicon.

## Pages

- `/` — Home: full-bleed hero with the ribbon motif, featured hampers, "gifting by occasion" strip, craft/quality story band, testimonials, closing CTA.
- `/collections` — All gifts, filterable by occasion (weddings, corporate, birthdays, festive, thank-you) and price band.
- `/collections/$slug` — Single collection with its own story header.
- `/product/$slug` — Product page: image gallery, description, what's inside, size/wrap options, quantity, add to bag, related gifts.
- `/bespoke` — Custom hamper enquiry (the premium hook: pick occasion, budget, tone).
- `/about` — Brand story, craft, packaging.
- `/contact` — Contact form and details (left blank/demo for now).
- `/cart` and `/checkout` — Bag review and checkout.

Every page gets its own title, description and social preview metadata.

## Products and shop

Catalogue starts as curated hand-written content in one typed data file (~12–16 gifts across 5 collections), so it's easy to read and edit. Cart lives in browser storage and persists across reloads — add, remove, change quantity, gift-note field, running total.

Because this is a real shop selling physical goods, checkout should run on Shopify. That's a separate approval step: when you're ready, I'll ask whether to create a new store or connect an existing one, then wire the product data and checkout to it. Until then the checkout page is a complete, working front end that collects the order and shows a confirmation, so nothing is blocked.

## Imagery

Gift/hamper photography and packaging textures generated to match the purple-and-gold direction — no stock-looking filler.

## Technical notes

- TanStack Start routes under `src/routes/`; shared header/footer in `__root.tsx`.
- Brand tokens defined in `src/styles.css` under `@theme` (purple, gold, ivory, surfaces, gold-foil gradient, soft shadows). No hardcoded colour classes in components.
- Fonts loaded via `<link>` in the root route head.
- Logo uploaded as a CDN asset and used for header, footer and favicon.
- Catalogue in `src/data/catalog.ts`; cart state in a small provider backed by localStorage.
- Generated imagery saved under `src/assets/`.
