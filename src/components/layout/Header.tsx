'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Globe,
  PhoneCall,
  Share2,
  Tag,
  HelpCircle,
  Clock,
  Compass,
} from 'lucide-react';
import { PlatformIcon } from '@/components/ui/BrandIcons';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { PRODUCTS } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { BUSINESS_CONFIG } from '@/config/business';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, toggleLanguage, t } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Detect scroll for sticky header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close search results on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter products for instant search dropdown (bilingual match!)
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter((p) => {
        const query = searchQuery.toLowerCase();
        return (
          p.name_en.toLowerCase().includes(query) ||
          p.name_bn.toLowerCase().includes(query) ||
          p.platform.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { href: '/', label: t.navHome },
    { href: '/products', label: t.navProducts },
    { href: '/ai-tools', label: t.navAiTools, badge: 'AI' },
    { href: '/social-media', label: t.navSocialMedia },
    { href: '/offers', label: t.navOffers, isOffer: true },
    { href: '/how-it-works', label: t.navHowItWorks },
    { href: '/contact', label: t.navContact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* ─── Top Notification / Trust Bar ───────────────────────────────── */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-purple-950/60">
        <div className="max-w-container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-300">{t.topNotice}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-400">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: {BUSINESS_CONFIG.whatsapp}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span>{locale === 'bn' ? BUSINESS_CONFIG.supportHours_bn : BUSINESS_CONFIG.supportHours_en}</span>
          </div>
        </div>
      </div>

      {/* ─── Main Sticky Navigation ─────────────────────────────────────── */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-200 ${
          isScrolled ? 'shadow-md border-b border-slate-200/80 py-2.5' : 'border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Official Brand Logo */}
          <BrandLogo size="md" />

          {/* Desktop Search Bar with Bilingual Instant Dropdown */}
          <div ref={searchRef} className="hidden lg:block relative flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-600 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>

            {/* Instant Search Results Dropdown */}
            {isSearchFocused && filteredProducts.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 animate-fade-in">
                <div className="p-2 border-b border-slate-100 text-xs font-semibold text-slate-500">
                  {locale === 'bn' ? 'প্রোডাক্ট রেজাল্ট' : 'Matching Products'}
                </div>
                <div className="divide-y divide-slate-100">
                  {filteredProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      onClick={() => setIsSearchFocused(false)}
                      className="flex items-center justify-between p-3 hover:bg-purple-50/60 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                          <PlatformIcon platform={p.platform} className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-purple-700">
                            {locale === 'bn' ? p.name_bn : p.name_en}
                          </div>
                          <div className="text-xs text-slate-500">{p.platform}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-700">
                          {formatPrice(p.basePrice, locale)}
                        </div>
                        <div className="text-[11px] text-emerald-600 font-medium">
                          {locale === 'bn' ? p.deliveryTime_bn : p.deliveryTime_en}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/products?search=${encodeURIComponent(searchQuery)}`}
                  onClick={() => setIsSearchFocused(false)}
                  className="block text-center py-2 text-xs font-bold text-purple-700 bg-slate-50 hover:bg-purple-100/50 transition-colors"
                >
                  {locale === 'bn' ? 'সব ফলাফল দেখুন →' : 'View all results →'}
                </Link>
              </div>
            )}
          </div>

          {/* Header Action Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 hover:bg-purple-50 hover:border-purple-300 text-slate-700 hover:text-purple-700 transition-all cursor-pointer"
              title={locale === 'bn' ? 'Switch to English' : 'বাংলা ভাষায় পরিবর্তন করুন'}
            >
              <Globe className="w-3.5 h-3.5 text-purple-600" />
              <span className="font-semibold">{locale === 'bn' ? 'EN' : 'বাংলা'}</span>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-colors cursor-pointer"
              aria-label={t.cart}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[11px] font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ─── Desktop Secondary Navigation Row ─────────────────────────── */}
        <nav className="hidden lg:block border-t border-slate-100 mt-2.5 pt-2">
          <div className="max-w-container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 py-1 transition-colors relative hover:text-purple-700 ${
                        isActive
                          ? 'text-purple-700 font-bold'
                          : 'text-slate-600 hover:text-purple-600'
                      }`}
                    >
                      {link.label}
                      {link.badge && (
                        <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-purple-100 text-purple-700">
                          {link.badge}
                        </span>
                      )}
                      {link.isOffer && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-pink-100 text-pink-700 animate-pulse">
                          HOT
                        </span>
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 text-xs font-semibold">
              <Link
                href="/track-order"
                className="flex items-center gap-1 text-slate-500 hover:text-purple-700 transition-colors"
              >
                <Clock className="w-3.5 h-3.5 text-purple-600" />
                <span>{t.navTrackOrder}</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* ─── Mobile Slide-out Menu ──────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[88px] bg-slate-900/50 backdrop-blur-xs z-50 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-4/5 max-w-sm h-full p-5 overflow-y-auto shadow-2xl flex flex-col justify-between animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Mobile Search */}
              <form
                onSubmit={(e) => {
                  handleSearchSubmit(e);
                  setIsMobileMenuOpen(false);
                }}
                className="relative mb-4"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </form>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-700">
                        {link.badge}
                      </span>
                    )}
                    {link.isOffer && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-pink-100 text-pink-700">
                        HOT
                      </span>
                    )}
                  </Link>
                ))}

                {/* Track Order in Mobile Drawer */}
                <Link
                  href="/track-order"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>{t.navTrackOrder}</span>
                  </span>
                </Link>
              </nav>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <div className="text-xs text-slate-500">
                <div className="font-semibold text-slate-800 mb-1">
                  {locale === 'bn' ? 'সাপোর্ট হেল্পলাইন:' : 'Direct Helpline:'}
                </div>
                <div>{BUSINESS_CONFIG.phoneDisplay}</div>
              </div>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{locale === 'bn' ? 'হোয়াটসঅ্যাপে কথা বলুন' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
