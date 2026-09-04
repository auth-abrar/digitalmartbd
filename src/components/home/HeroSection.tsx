'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Clock,
  Zap,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import {
  ChatGptIcon,
  FacebookIcon,
  CanvaIcon,
  BkashIcon,
  NagadIcon,
  RocketPaymentIcon,
} from '@/components/ui/BrandIcons';
import { BUSINESS_CONFIG } from '@/config/business';

export function HeroSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-slate-50 py-12 md:py-20 border-b border-slate-100">
      {/* Background Circuit Grid Pattern */}
      <div className="absolute inset-0 bg-circuit-mesh opacity-60 pointer-events-none" />

      {/* Subtle Purple-Magenta Brand Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-fuchsia-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* National Platform Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
              {t.heroTitlePart1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600">
                {t.heroTitleHighlight}
              </span>
              {t.heroTitlePart2}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-lg shadow-purple-600/20"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {t.heroCtaPrimary}
                </Button>
              </Link>
              <Link href="/how-it-works" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold"
                >
                  {t.heroCtaSecondary}
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/80 backdrop-blur-xs py-2 px-3 rounded-lg border border-slate-200/80">
                <Zap className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>{t.heroFeature1}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/80 backdrop-blur-xs py-2 px-3 rounded-lg border border-slate-200/80">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{t.heroFeature2}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/80 backdrop-blur-xs py-2 px-3 rounded-lg border border-slate-200/80">
                <Headphones className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{t.heroFeature3}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Product Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Product Preview Container */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-200/80 space-y-5 relative">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {locale === 'bn' ? 'আজকের ট্রেন্ডিং কালেকশন' : 'Today’s Hot Picks'}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700">
                    {locale === 'bn' ? 'ইনস্ট্যান্ট ডেলিভারি' : 'Instant Delivery'}
                  </span>
                </div>

                {/* Micro Item 1: ChatGPT Plus */}
                <Link
                  href="/products/chatgpt-plus"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-purple-50/60 border border-slate-100 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <ChatGptIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-purple-700">
                        {locale === 'bn' ? 'চ্যাটজিপিটি প্লাস' : 'ChatGPT Plus'}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {locale === 'bn' ? 'GPT-4o ও ক্যানভাস সুবিধা' : 'GPT-4o & Canvas Access'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-purple-700">৳৪৫০</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">
                      {locale === 'bn' ? 'স্টক আছে' : 'In Stock'}
                    </div>
                  </div>
                </Link>

                {/* Micro Item 2: Facebook Followers */}
                <Link
                  href="/products/facebook-followers"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-purple-50/60 border border-slate-100 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shadow-xs">
                      <FacebookIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-purple-700">
                        {locale === 'bn' ? 'ফেসবুক ফলোয়ার (১,০০০)' : 'Facebook Followers (1K)'}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {locale === 'bn' ? 'পাসওয়ার্ড ছাড়া নন-ড্রপ' : 'Non-Drop, No Password'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-purple-700">৳৩২০</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">
                      {locale === 'bn' ? 'স্টক আছে' : 'In Stock'}
                    </div>
                  </div>
                </Link>

                {/* Micro Item 3: Canva Pro */}
                <Link
                  href="/products/canva-pro"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-purple-50/60 border border-slate-100 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00C4CC] text-white flex items-center justify-center shadow-xs">
                      <CanvaIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-purple-700">
                        {locale === 'bn' ? 'ক্যানভা প্রো (১ বছর)' : 'Canva Pro (1 Year)'}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {locale === 'bn' ? 'পার্সোনাল জিমেইলে এক্টিভেশন' : 'Activated on Personal Email'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-purple-700">৳১৫০</div>
                    <div className="text-[10px] text-pink-600 font-semibold">
                      {locale === 'bn' ? '৫০% ছাড়' : '50% OFF'}
                    </div>
                  </div>
                </Link>

                {/* Payment accepted banner */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-t border-slate-100">
                  <span className="font-semibold text-slate-600">
                    {locale === 'bn' ? 'পেমেন্ট সাপোর্ট:' : 'Payment Support:'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-pink-50 border border-pink-200/60 text-[#E2136E] font-bold text-[10px]">
                      <BkashIcon className="w-3.5 h-3.5" />
                      <span>bKash</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200/60 text-[#E31A22] font-bold text-[10px]">
                      <NagadIcon className="w-3.5 h-3.5" />
                      <span>Nagad</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200/60 text-[#8C3494] font-bold text-[10px]">
                      <RocketPaymentIcon className="w-3.5 h-3.5" />
                      <span>Rocket</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
