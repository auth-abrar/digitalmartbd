'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { CATEGORIES } from '@/data/categories';
import { Bot, Share2, Layers, Tag, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Bot,
  Share2,
  Layers,
};

export function CategoryGrid() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-14 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-block text-xs font-bold text-purple-700 uppercase tracking-wider mb-1.5">
              {locale === 'bn' ? 'ক্যাটাগরি সমূহ' : 'Browse Categories'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.categoryTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-xl">
              {t.categorySubtitle}
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-800 transition-colors"
          >
            <span>{locale === 'bn' ? 'সব প্রোডাক্ট দেখুন' : 'View Full Catalog'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || Bot;

            return (
              <Link
                key={cat.id}
                href={cat.slug === 'ai-tools' ? '/ai-tools' : cat.slug === 'social-media' ? '/social-media' : `/categories/${cat.slug}`}
                className="group relative bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-purple-400/80 hover:shadow-[0_16px_36px_-8px_rgba(124,58,237,0.12),0_4px_16px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Subtle gradient corner highlight */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-purple-100/40 via-purple-50/20 to-transparent rounded-bl-full pointer-events-none group-hover:from-purple-200/50 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100/70 group-hover:bg-purple-700 group-hover:text-white transition-all flex items-center justify-center text-purple-700 shadow-2xs group-hover:scale-105 duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {cat.badge_en && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100/80 shadow-2xs">
                        {locale === 'bn' ? cat.badge_bn : cat.badge_en}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {locale === 'bn' ? cat.name_bn : cat.name_en}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[38px]">
                    {locale === 'bn' ? cat.description_bn : cat.description_en}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700 group-hover:text-purple-800">
                  <span className="text-slate-500 font-medium">
                    {locale === 'bn'
                      ? `${cat.itemCount}টি সার্ভিস উপলব্ধ`
                      : `${cat.itemCount} Services Available`}
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform font-bold text-purple-700">
                    <span>{locale === 'bn' ? 'সার্ভিস দেখুন' : 'Explore'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
