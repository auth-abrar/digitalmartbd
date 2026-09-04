'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ArrowRight, Tag, Percent } from 'lucide-react';

export function DealsSection() {
  const { locale, t } = useLanguage();

  // Products with active offers
  const offerProducts = PRODUCTS.filter((p) => p.hasOffer).slice(0, 4);

  return (
    <section className="py-14 bg-gradient-to-b from-purple-50/40 via-white to-white border-b border-slate-100">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 uppercase tracking-wider mb-1.5">
              <Percent className="w-3.5 h-3.5 text-pink-600" />
              <span>{locale === 'bn' ? 'স্পেশাল ডিসকাউন্ট' : 'Discount Deals'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.offersTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-xl">
              {t.offersSubtitle}
            </p>
          </div>

          <Link
            href="/offers"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-800 transition-colors"
          >
            <span>{locale === 'bn' ? 'সব অফার দেখুন' : 'View All Offers'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
