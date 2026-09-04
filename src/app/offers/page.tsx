'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Tag, Gift } from 'lucide-react';

export default function OffersPage() {
  const { locale, t } = useLanguage();

  const offerProducts = PRODUCTS.filter((p) => p.hasOffer);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-fuchsia-900 to-pink-900 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-pink-200 text-xs font-bold border border-white/15">
              <Gift className="w-4 h-4 text-pink-300" />
              <span>{locale === 'bn' ? 'বিশেষ ছাড় ও অফার' : 'Special Deals & Bundles'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {locale === 'bn' ? 'স্পেশাল ডিসকাউন্ট ও সাশ্রয়ী ডিল' : 'Curated Offers & Discounted Packages'}
            </h1>
            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-normal">
              {locale === 'bn'
                ? 'সিলেক্টেড AI সাবস্ক্রিপশন ও সোশ্যাল মিডিয়া সার্ভিসের সেরা অফারগুলো এক নজরে দেখে নিন। সীমিত সময়ের বাজেট-বান্ধব রেটে আজই অর্ডার সম্পন্ন করুন।'
                : 'Browse our selected deals and promotional rates for top AI productivity tools and social media growth packages.'}
            </p>
          </div>
        </div>

        {/* Offer Products Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {locale === 'bn' ? 'চলমান অফারসমূহ' : 'Active Offers'}
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {offerProducts.length} {locale === 'bn' ? 'টি ডিসকাউন্ট প্রোডাক্ট' : 'Offers Available'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {offerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
