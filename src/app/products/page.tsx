'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from '@/components/product/ProductCard';
import { Search, SlidersHorizontal, X, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { smartSearch } from '@/lib/searchEngine';

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCat = searchParams.get('category') || 'all';

  const { locale, t } = useLanguage();

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high'>('popular');
  const [offersOnly, setOffersOnly] = useState(false);

  // Available unique platforms
  const platforms = useMemo(() => {
    const list = Array.from(new Set(PRODUCTS.map((p) => p.platform)));
    return ['all', ...list];
  }, []);

  // Smart search calculation
  const searchResolution = useMemo(() => {
    if (!searchTerm.trim()) return null;
    return smartSearch(searchTerm.trim());
  }, [searchTerm]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const matchedIds = searchResolution 
      ? new Set(searchResolution.products.map((p) => p.id)) 
      : null;

    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Platform filter
      if (selectedPlatform !== 'all' && p.platform !== selectedPlatform) {
        return false;
      }

      // Offers only filter
      if (offersOnly && !p.hasOffer) {
        return false;
      }

      // Smart Search filter
      if (matchedIds && !matchedIds.has(p.id)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      const priceA = a.packages[0]?.price || a.basePrice;
      const priceB = b.packages[0]?.price || b.basePrice;

      if (sortBy === 'price-low') {
        return priceA - priceB;
      }
      if (sortBy === 'price-high') {
        return priceB - priceA;
      }
      // default: popularity / review count
      return b.reviewCount - a.reviewCount;
    });
  }, [selectedCategory, selectedPlatform, offersOnly, searchResolution, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedPlatform('all');
    setOffersOnly(false);
    setSortBy('popular');
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            {locale === 'bn' ? 'সকল ডিজিটাল প্রোডাক্ট ও সার্ভিস' : 'All Digital Products & Services'}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            {locale === 'bn'
              ? 'চ্যাটজিপিটি, ক্লড, ফেসবুক, ইনস্টাগ্রাম এবং প্রয়োজনীয় সব ডিজিটাল সলিউশন খুঁজুন।'
              : 'Discover AI subscriptions, social media growth, and verified digital tools.'}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-2.5 sm:gap-3 items-center">
            {/* Search Input */}
            <div className="col-span-2 md:col-span-6 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-600 focus:bg-white transition-all text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Platform Selector */}
            <div className="col-span-1 md:col-span-3">
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-full px-2.5 sm:px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-700 font-medium truncate"
              >
                <option value="all">
                  {locale === 'bn' ? 'সব প্ল্যাটফর্ম' : 'All Platforms'}
                </option>
                {platforms
                  .filter((p) => p !== 'all')
                  .map((plat) => (
                    <option key={plat} value={plat}>
                      {plat}
                    </option>
                  ))}
              </select>
            </div>

            {/* Sorter */}
            <div className="col-span-1 md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-2.5 sm:px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-700 font-medium truncate"
              >
                <option value="popular">{t.sortPopular}</option>
                <option value="price-low">{t.sortPriceLow}</option>
                <option value="price-high">{t.sortPriceHigh}</option>
              </select>
            </div>
          </div>

          {/* Category Pills & Offers Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-purple-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {locale === 'bn' ? 'সব ক্যাটাগরি' : 'All Categories'}
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat.slug
                      ? 'bg-purple-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {locale === 'bn' ? cat.name_bn : cat.name_en}
                </button>
              ))}
            </div>

            {/* Offers Only Checkbox */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={offersOnly}
                  onChange={(e) => setOffersOnly(e.target.checked)}
                  className="rounded text-purple-600 focus:ring-purple-500 w-4 h-4 cursor-pointer"
                />
                <span className="flex items-center gap-1 text-pink-600">
                  <Tag className="w-3.5 h-3.5" />
                  {locale === 'bn' ? 'শুধুমাত্র অফার' : 'Offers Only'}
                </span>
              </label>

              {(searchTerm ||
                selectedCategory !== 'all' ||
                selectedPlatform !== 'all' ||
                offersOnly) && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:underline font-semibold"
                >
                  {t.clearFilters}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Smart Match Banner */}
        {searchResolution?.didYouMean && (
          <div className="mb-4 p-3 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-between text-xs text-purple-900">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-purple-700">
                {locale === 'bn' ? 'সংশোধিত ম্যাচ:' : 'Smart Match:'}
              </span>
              <span>
                {locale === 'bn' 
                  ? 'সম্ভাব্য সঠিক নাম: ' 
                  : 'Showing results matching '}
                <strong className="underline underline-offset-2">{searchResolution.didYouMean}</strong>
              </span>
            </div>
            {searchResolution.suggestedCategory && (
              <span className="px-2 py-0.5 rounded-full bg-purple-200/60 text-purple-800 text-[10px] font-semibold">
                {searchResolution.suggestedCategory}
              </span>
            )}
          </div>
        )}

        {/* Results Counter */}
        <div className="mb-4 text-xs font-semibold text-slate-500">
          {locale === 'bn'
            ? `মোট ${filteredProducts.length}টি প্রোডাক্ট প্রদর্শিত হচ্ছে`
            : `Showing ${filteredProducts.length} Products`}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-slate-900">{t.noProductsFound}</h3>
            <p className="text-xs text-slate-500">
              {locale === 'bn'
                ? 'অন্য কোনো নাম লিখে সার্চ করুন অথবা ফিল্টার পরিবর্তন করুন।'
                : 'Try adjusting your search keyword or clearing the filters.'}
            </p>
            <Button variant="outline" size="sm" onClick={resetFilters}>
              {t.clearFilters}
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading catalog...</div>}>
      <ProductsCatalogContent />
    </Suspense>
  );
}
