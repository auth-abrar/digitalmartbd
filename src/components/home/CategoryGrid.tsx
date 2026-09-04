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
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-purple-400 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle gradient corner highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-bl-full pointer-events-none group-hover:from-purple-200/50 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-purple-600 group-hover:text-white transition-all flex items-center justify-center text-purple-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    {cat.badge_en && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">
                        {locale === 'bn' ? cat.badge_bn : cat.badge_en}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {locale === 'bn' ? cat.name_bn : cat.name_en}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {locale === 'bn' ? cat.description_bn : cat.description_en}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700 group-hover:text-purple-800">
                  <span>
                    {locale === 'bn'
                      ? `${cat.itemCount}টি সার্ভিস উপলব্ধ`
                      : `${cat.itemCount} Services Available`}
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {locale === 'bn' ? 'সার্ভিস দেখুন' : 'Explore'} →
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
