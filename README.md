# Nazeefa E-Commerce Platform

A production-quality bilingual (English & Bangla) e-commerce platform built on Next.js 15 App Router.

## Project Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS 3.x + Radix UI headless primitives
- **Database:** MySQL 8.x (InnoDB) via Prisma ORM *(Phase 3B+)*
- **Auth:** Custom JWT + Google OAuth *(Phase 3B+)*
- **Payments:** bKash / Nagad / UddoktaPay / Stripe *(Phase 4+)*

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install dependencies

```bash
npm install
```

### Environment setup

Copy `.env.example` to `.env.local` and fill in required values:

```bash
cp .env.example .env.local
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Type checking

```bash
npm run type-check
```

### Lint

```bash
npm run lint
```

## Project Structure

```
nazeefa.com/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (storefront)/       # Storefront route group
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── ui/                 # Primitive UI components
│   │   ├── storefront/         # Storefront-specific components
│   │   └── layout/             # Layout components (Header, Footer)
│   ├── lib/                    # Shared utilities
│   │   ├── i18n/               # Internationalization (EN/BN)
│   │   ├── currency/           # Currency formatting
│   │   └── seo/                # SEO metadata utilities
│   ├── contexts/               # React contexts (Currency, Locale)
│   ├── hooks/                  # Custom hooks
│   └── types/                  # TypeScript type definitions
├── public/
│   └── fonts/                  # SolaimanLipi font files
├── tailwind.config.ts
├── tsconfig.json
└── .env.example
```

## Design System

Design tokens are defined in `tailwind.config.ts` and available as CSS custom properties. See `src/lib/design-tokens.ts` for the full token reference.

## Localization

The platform supports English (EN) and Bangla (BN). All content fields maintain separate `_en` and `_bn` variants.

**CRITICAL RULE:** Human-written Bangla copy is never overwritten by machine translation. When English content changes, the Bangla version is flagged for manual review.

Bangla uses **SolaimanLipi** as the primary font, loaded via `next/font/local`.

## Commerce Architecture

The canonical six-tier hierarchy is:

```
Product (catalog_products)
  → Product Type (catalog_product_types)
    → Variant (catalog_product_variants)
      → Fulfillment Profile (fulfillment_profiles)
        → Fulfillment Route (fulfillment_routes)
          → Provider (sys_provider_configs)
```

## Currency

Currency is configurable through the ERP. The storefront loads active currencies dynamically and never hardcodes currency symbols.

## Security Notes

- No secrets are stored in frontend code
- `.env.local` is gitignored
- Backend authorization is implemented in Phase 3B+
- Digital secrets are never exposed client-side

## Development Conventions

- All components use named exports
- All data interfaces live in `src/types/`
- Server components are the default; add `'use client'` only when necessary
- Accessibility: WCAG 2.2 AA baseline (semantic HTML, keyboard nav, focus states)
