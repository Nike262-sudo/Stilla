# STILLA

An editorial landing page for a fictional Scandinavian furniture house.
Built with React + Vite, Framer Motion for scroll and load animation, and
hand-written CSS (no UI framework, no component library).

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build      # production build to /dist
npm run preview    # serve the production build locally
```

## Structure

```
src/
  App.jsx                    assembles the page in section order
  index.css                  design tokens, reset, shared type/layout utilities
  components/
    Navigation.jsx / .css
    Hero.jsx / .css
    FeaturedCollection.jsx / .css
    Craftsmanship.jsx / .css
    EditorialStory.jsx / .css
    CollectionShowcase.jsx / .css
    Materials.jsx / .css
    FeaturedProducts.jsx / .css
    Journal.jsx / .css
    Newsletter.jsx / .css
    Footer.jsx / .css
    ImagePlaceholder.jsx / .css   reusable editorial image placeholder
```

Each component owns its own stylesheet, using BEM-style class names
(`.block__element--modifier`) so selectors stay predictable and easy to
extend. Shared design tokens (colour, type, spacing, easing) live as CSS
custom properties in `src/index.css` — every component reads from those
rather than hard-coding values.

## Replacing placeholders

Every photograph on the page is an `<ImagePlaceholder>` — a labelled block
that preserves the aspect ratio of the real image. To drop in real
photography, swap the component for an `<img>` (or a background image) at
the same aspect ratio; the labels describe what each shot should show
(e.g. "Craftsmanship Detail — Joinery").

## Design tokens

| Token | Value |
|---|---|
| Background | `#F7F4EF` |
| Primary text | `#171717` |
| Secondary text | `#666666` |
| Border | `#E5E0D8` |
| Accent | `#8C7358` |
| Headline typeface | Instrument Serif |
| Body typeface | Geist |
