import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { AmbientBackground } from '@/components/ui/AmbientBackground';
import { BUSINESS_CONFIG } from '@/config/business';

export const metadata: Metadata = {
  title: 'Digital Mart BD — Premium Digital Tools & Services Marketplace',
  description:
    'Buy ChatGPT Plus, Claude Pro, Google Gemini, Facebook Followers, Canva Pro, and essential digital services in Bangladesh with bKash and Nagad payment.',
  keywords: [
    'Digital Mart BD',
    'ChatGPT Bangladesh',
    'Claude Pro BD',
    'AI Tools Bangladesh',
    'Facebook Followers BD',
    'Canva Pro Bangladesh',
    'Digital Services Dhaka',
    'bKash payment digital products',
  ],
  authors: [{ name: 'Digital Mart BD' }],
  metadataBase: new URL('https://digitalmartbd.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Digital Mart BD — Digital Tools & Services Marketplace',
    description:
      'The premier Bangladesh-based digital marketplace for AI tools, social media growth packages, and productivity subscriptions.',
    siteName: 'Digital Mart BD',
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        {/* Preload SolaimanLipi font files */}
        <link
          rel="preload"
          href="/fonts/SolaimanLipi.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SolaimanLipi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Prevent browser extensions (Bitdefender, Grammarly) from causing React hydration mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName) {
                        var attr = m.attributeName.toLowerCase();
                        if (attr.indexOf('bis_') === 0 || attr.indexOf('data-gr-') === 0) {
                          m.target.removeAttribute(m.attributeName);
                        }
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['bis_skin_checked', 'bis_register', 'data-gr-ext-installed', 'data-new-gr-c-s-check-loaded']
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900 pb-24 lg:pb-0"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <CartProvider>
            <AmbientBackground />
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <CartDrawer />
            <Footer />
            <MobileNav />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
