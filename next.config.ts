import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ─── Image Optimization ─────────────────────────────────────────────────────
  images: {
    // Domains allowed for remote images (configured per environment)
    remotePatterns: [
      // Production CDN / storage will be added here via environment config
      // Example: { protocol: 'https', hostname: 'cdn.nazeefa.com' }
    ],
    formats: ['image/avif', 'image/webp'],
    // Reasonable device sizes for responsive product images
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
  },

  // ─── Internationalization ────────────────────────────────────────────────────
  // Note: We use a custom locale context (not next/i18n) for granular EN/BN
  // bilingual content control and the human Bangla preservation requirement.

  // ─── Headers ────────────────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
      // Immutable cache for static assets
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  // ─── Redirects ───────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // Normalize trailing slashes
      {
        source: '/shop/',
        destination: '/shop',
        permanent: true,
      },
    ]
  },

  // ─── Compiler Options ────────────────────────────────────────────────────────
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  // ─── Experimental ────────────────────────────────────────────────────────────
  experimental: {
    // Server component optimizations
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion'],
  },

  // ─── TypeScript ──────────────────────────────────────────────────────────────
  typescript: {
    // Hard-fail builds on type errors
    ignoreBuildErrors: false,
  },

  // ─── ESLint ──────────────────────────────────────────────────────────────────
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig
