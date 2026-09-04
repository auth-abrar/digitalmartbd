'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';
import {
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
} from 'lucide-react';
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  BkashIcon,
  NagadIcon,
  RocketPaymentIcon,
  BankPaymentIcon,
} from '@/components/ui/BrandIcons';

export function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-purple-950/80 pt-10 sm:pt-14 pb-12 sm:pb-8">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-slate-800/80">
          {/* Col 1: Brand, Trust Chips & Direct Mobile Action CTAs */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footerBrandDesc}
            </p>

            {/* Mobile Direct Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1 max-w-sm">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow-md shadow-emerald-950/40 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{locale === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 active:scale-95 text-slate-200 font-bold text-xs transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>{locale === 'bn' ? 'সরাসরি কল' : 'Call Direct'}</span>
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-1.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span>{BUSINESS_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span>
                  {locale === 'bn' ? BUSINESS_CONFIG.supportHours_bn : BUSINESS_CONFIG.supportHours_en}
                </span>
              </div>
            </div>

            {/* Official Social Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={BUSINESS_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-700 hover:border-transparent transition-all"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all"
                aria-label="YouTube Channel"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Grid: 2-Columns on Mobile for Compact Scannability, 3-Columns on Large */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-2 lg:pt-0">
            {/* Quick Navigation Links */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100 border-b border-slate-800/80 pb-1.5">
                {t.quickLinks}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-purple-400 transition-colors">
                    {t.navHome}
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-purple-400 transition-colors">
                    {t.navProducts}
                  </Link>
                </li>
                <li>
                  <Link href="/offers" className="hover:text-purple-400 transition-colors">
                    {t.navOffers}
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-purple-400 transition-colors">
                    {t.navHowItWorks}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    {locale === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-400 transition-colors">
                    {t.navContact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Categories */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100 border-b border-slate-800/80 pb-1.5">
                {t.categories}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/ai-tools" className="hover:text-purple-400 transition-colors">
                    {t.navAiTools}
                  </Link>
                </li>
                <li>
                  <Link href="/social-media" className="hover:text-purple-400 transition-colors">
                    {t.navSocialMedia}
                  </Link>
                </li>
                <li>
                  <Link href="/products/chatgpt-plus" className="hover:text-purple-400 transition-colors">
                    ChatGPT Plus
                  </Link>
                </li>
                <li>
                  <Link href="/products/claude-pro" className="hover:text-purple-400 transition-colors">
                    Claude Pro
                  </Link>
                </li>
                <li>
                  <Link href="/products/facebook-followers" className="hover:text-purple-400 transition-colors">
                    {locale === 'bn' ? 'ফেসবুক ফলোয়ার' : 'Facebook Followers'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Legal Policies (Full-width on extra-narrow or 3rd column on tablet/desktop) */}
            <div className="col-span-2 sm:col-span-1 space-y-3 pt-2 sm:pt-0">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100 border-b border-slate-800/80 pb-1.5">
                {t.supportAndPolicies}
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/track-order" className="hover:text-purple-400 transition-colors font-medium text-purple-300">
                    {t.navTrackOrder}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-purple-400 transition-colors">
                    {t.navFaq}
                  </Link>
                </li>
                <li>
                  <Link href="/delivery-policy" className="hover:text-purple-400 transition-colors">
                    {locale === 'bn' ? 'ডেলিভারি পলিসি' : 'Delivery Policy'}
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-purple-400 transition-colors">
                    {locale === 'bn' ? 'রিফান্ড পলিসি' : 'Refund Policy'}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-purple-400 transition-colors">
                    {locale === 'bn' ? 'শর্তাবলী (Terms)' : 'Terms & Conditions'}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-purple-400 transition-colors">
                    {locale === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ─── Bottom Row: Payments & Legal Disclaimer ─────────────────── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Payment Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs text-slate-400 font-semibold">{t.paymentMethods}:</span>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-pink-950/80 text-pink-300 border border-pink-900/60 shadow-xs">
                <BkashIcon className="w-4 h-4" />
                <span>bKash</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-orange-950/80 text-orange-300 border border-orange-900/60 shadow-xs">
                <NagadIcon className="w-4 h-4" />
                <span>Nagad</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-purple-950/80 text-purple-300 border border-purple-900/60 shadow-xs">
                <RocketPaymentIcon className="w-4 h-4" />
                <span>Rocket</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-slate-900 text-slate-300 border border-slate-800 shadow-xs">
                <BankPaymentIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>Bank</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. {t.allRightsReserved}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-4 border-t border-slate-900 text-[11px] text-slate-600 text-center leading-relaxed">
          {t.disclaimerFooter}
        </div>
      </div>
    </footer>
  );
}
