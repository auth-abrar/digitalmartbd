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
import { GlobalSearchModal } from '@/components/search/GlobalSearchModal';
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
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Global Cmd+K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

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
      <div className="bg-slate-950 text-slate-200 text-xs py-1.5 px-3 sm:px-4 border-b border-purple-950/60">
        <div className="max-w-container mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="font-medium text-slate-300 text-[11px] sm:text-xs truncate">
              {t.topNotice}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-400 flex-shrink-0">
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
          isScrolled ? 'shadow-md border-b border-slate-200/80 py-2 sm:py-2.5' : 'border-b border-slate-100 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-container mx-auto px-3 sm:px-6 flex items-center justify-between gap-3">
          {/* Official Brand Logo */}
          <div className="flex-shrink-0">
            <BrandLogo size="md" />
          </div>

          {/* Desktop Search Trigger Bar with Cmd+K Badge */}
          <div 
            onClick={() => setIsSearchModalOpen(true)}
            className="hidden lg:flex items-center relative flex-1 max-w-md mx-4 cursor-pointer group"
          >
            <div className="w-full pl-10 pr-12 py-2 text-sm bg-slate-50 group-hover:bg-white border border-slate-200 group-hover:border-purple-400 rounded-full text-slate-400 group-hover:text-slate-600 transition-all flex items-center justify-between shadow-xs">
              <span className="truncate">{t.searchPlaceholder}</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-bold text-slate-500 bg-white border border-slate-200 rounded-md shadow-xs group-hover:border-purple-200">
                <span className="text-[9px]">⌘</span>K
              </kbd>
            </div>
            <Search className="w-4 h-4 text-slate-400 group-hover:text-purple-600 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors pointer-events-none" />
          </div>

          {/* Header Action Items */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 hover:bg-purple-50 hover:border-purple-300 text-slate-700 hover:text-purple-700 transition-all cursor-pointer active:scale-95"
              title={locale === 'bn' ? 'Switch to English' : 'বাংলা ভাষায় পরিবর্তন করুন'}
            >
              <Globe className="w-3.5 h-3.5 text-purple-600" />
              <span className="font-semibold text-[11px] sm:text-xs">{locale === 'bn' ? 'EN' : 'বাংলা'}</span>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-colors cursor-pointer active:scale-95"
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
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-colors active:scale-95"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-purple-700" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ─── Mobile Dedicated Integrated Search Input Bar ──────────────── */}
        <div className="block lg:hidden px-3 pt-2 pb-0.5">
          <div
            onClick={() => setIsSearchModalOpen(true)}
            className="w-full flex items-center justify-between px-3 py-2 bg-slate-100/90 active:bg-slate-200/90 border border-slate-200/90 rounded-xl text-slate-400 text-xs shadow-2xs transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2 truncate min-w-0">
              <Search className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
              <span className="truncate font-medium text-slate-500 text-[11.5px]">
                {t.searchPlaceholder}
              </span>
            </div>
            <span className="text-[10px] font-bold text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-md flex-shrink-0 ml-1">
              {locale === 'bn' ? 'সার্চ' : 'Search'}
            </span>
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

      {/* ─── Mobile Slide-out Drawer ────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex justify-end transition-opacity duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-[85%] max-w-sm h-full p-5 overflow-y-auto shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-5">
              {/* Drawer Top Header with Brand & Close Button */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <BrandLogo size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Category Action Chips */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/ai-tools"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-purple-50/80 border border-purple-100 text-purple-900 text-xs font-bold flex items-center justify-between"
                >
                  <span>AI টুলস</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-200/60 text-purple-800 font-extrabold">AI</span>
                </Link>
                <Link
                  href="/social-media"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-900 text-xs font-bold flex items-center justify-between"
                >
                  <span>সোশ্যাল মিডিয়া</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-200/60 text-blue-800 font-extrabold">GROW</span>
                </Link>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-purple-50 text-purple-700 font-bold border-l-4 border-purple-600'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-purple-700'
                      }`}
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
                  );
                })}

                {/* Track Order in Mobile Drawer */}
                <Link
                  href="/track-order"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>{t.navTrackOrder}</span>
                  </span>
                </Link>
              </nav>
            </div>

            {/* Mobile Footer Direct Contact Card */}
            <div className="pt-5 border-t border-slate-100 space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                <div className="font-bold text-slate-900 mb-0.5">
                  {locale === 'bn' ? 'জরুরি কাস্টমার কেয়ার:' : 'Customer Helpline:'}
                </div>
                <div className="text-purple-700 font-semibold">{BUSINESS_CONFIG.phoneDisplay}</div>
              </div>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{locale === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপে কথা বলুন' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Global Intelligent Search Modal (Cmd+K / Ctrl+K) */}
      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </header>
  );
}
