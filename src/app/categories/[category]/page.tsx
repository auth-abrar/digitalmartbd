'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layers, ArrowLeft } from 'lucide-react';

export default function CategoryDetailPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = use(params);
  const { locale, t } = useLanguage();

  const category = CATEGORIES.find((c) => c.slug === resolvedParams.category);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.category === category.slug);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-purple-700">
            {t.navHome}
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-purple-700">
            {t.navProducts}
          </Link>
          <span>/</span>
          <span className="font-bold text-slate-800">
            {locale === 'bn' ? category.name_bn : category.name_en}
          </span>
        </div>

        {/* Category Header */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm mb-10">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-xs font-bold text-purple-700 uppercase tracking-wider">
              {locale === 'bn' ? 'ক্যাটাগরি ক্যাটালগ' : 'Category Hub'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              {locale === 'bn' ? category.name_bn : category.name_en}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              {locale === 'bn' ? category.description_bn : category.description_en}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">
              {locale === 'bn' ? 'উপলব্ধ প্রোডাক্ট তালিকা' : 'Available Products'}
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {categoryProducts.length} {locale === 'bn' ? 'টি প্রোডাক্ট' : 'Products'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
