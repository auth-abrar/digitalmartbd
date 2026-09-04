'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductCategoryType } from '@/types';
import { ArrowRight, Flame } from 'lucide-react';

export function TrendingGrid() {
  const { locale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | ProductCategoryType>('all');

  const filtered = PRODUCTS.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  }).slice(0, 8);

  const tabs = [
    { id: 'all', label: locale === 'bn' ? 'সব প্রোডাক্ট' : 'All Products' },
    { id: 'ai-tools', label: locale === 'bn' ? 'AI টুলস' : 'AI Tools' },
    { id: 'social-media', label: locale === 'bn' ? 'সোশ্যাল মিডিয়া' : 'Social Media' },
    { id: 'digital-services', label: locale === 'bn' ? 'ডিজিটাল সার্ভিস' : 'Digital Services' },
  ];

  return (
    <section className="py-16 bg-white/70 backdrop-blur-xs border-b border-slate-100 relative">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 uppercase tracking-wider mb-2 px-2.5 py-1 rounded-full bg-pink-50 border border-pink-100/80 shadow-2xs">
              <Flame className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
              <span>{locale === 'bn' ? 'পপুলার কালেকশন' : 'Popular Selection'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.trendingTitle}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              {t.trendingSubtitle}
            </p>
          </div>

          {/* Filter Pills with Luxury Segmented Pill Styling */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80 overflow-x-auto max-w-full shadow-2xs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-700 shadow-sm border border-purple-100/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: 2-Columns on Mobile, 4-Columns on Large */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to browse all */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-purple-50 text-slate-800 hover:text-purple-700 font-bold text-sm border border-slate-200 transition-all"
          >
            <span>{locale === 'bn' ? 'সম্পূর্ণ ক্যাটালগ দেখুন' : 'Browse Entire Catalog'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
