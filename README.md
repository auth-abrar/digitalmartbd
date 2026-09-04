# Digital Mart BD

A production-grade digital commerce platform for Bangladesh, engineered with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS.

## Overview

Digital Mart BD provides a bilingual digital marketplace tailored for Bangladeshi customers, freelancers, and businesses. The platform offers instant purchasing and order tracking for digital productivity tools, software subscriptions, and social media solutions with seamless bKash, Nagad, and Rocket payments.

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3 with custom brand tokens
- **Typography:** SolaimanLipi (Native Bengali font preload)
- **Iconography:** Hand-crafted SVG vectors & Lucide React
- **Internationalization:** Native bilingual runtime (English & Bengali)
- **Persistence:** Local order ledger with WhatsApp fulfillment automation

## Key Features

- **Bilingual Interface:** Seamless real-time switching between English and Bengali across all catalogs, filters, and checkout screens.
- **Local Payment Gateways:** Dedicated support for bKash, Nagad, DBBL Rocket, and Bank wire transfer with copy-to-clipboard transaction workflows.
- **Dynamic Product Catalog:** Multi-tier package selector with duration, savings calculator, and real-time total pricing.
- **Order Tracking:** Direct order lookup by Order ID, Transaction ID, or phone number with real-time status progression.
- **Responsive Layout:** Engineered for all mobile, tablet, and desktop viewports with zero horizontal shifting and accessible keyboard navigation.

## Directory Structure

```
digitalmartbd/
├── public/                     # Static assets (icons, logos, fonts)
│   ├── fonts/                  # SolaimanLipi font files
│   └── images/                 # Brand vector marks
├── src/
│   ├── app/                    # Next.js App Router routes & pages
│   │   ├── ai-tools/           # AI subscription category hub
│   │   ├── checkout/           # Multi-step checkout & payment form
│   │   ├── order-confirmation/ # Order success & WhatsApp confirmation
│   │   ├── products/           # Full product catalog & detail views
│   │   ├── social-media/       # Social media services hub
│   │   └── track-order/        # Live order tracking engine
│   ├── components/
│   │   ├── cart/               # Cart drawer & state management
│   │   ├── home/               # Modular homepage sections
│   │   ├── layout/             # Header, Footer, and Mobile Navigation
│   │   ├── product/            # Product cards & package selectors
│   │   └── ui/                 # Reusable vector icons, badges, buttons
│   ├── config/                 # Business constants & contact settings
│   ├── contexts/               # Cart & Language React context providers
│   ├── data/                   # Product catalog, categories & customer reviews
│   ├── lib/                    # Translation dictionaries & helper utilities
│   └── types/                  # Strict TypeScript data schemas
├── tailwind.config.ts          # Theme customization & typography
└── tsconfig.json               # TypeScript strict compiler options
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/auth-abrar/digitalmartbd.git
cd digitalmartbd

# Install dependencies
npm install
```

### Development

```bash
# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the storefront.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

## License

Proprietary — All rights reserved by Digital Mart BD.
