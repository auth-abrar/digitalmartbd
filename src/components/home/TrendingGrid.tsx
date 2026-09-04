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
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 uppercase tracking-wider mb-1.5">
              <Flame className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
              <span>{locale === 'bn' ? 'পপুলার কালেকশন' : 'Popular Selection'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.trendingTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-xl">
              {t.trendingSubtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
