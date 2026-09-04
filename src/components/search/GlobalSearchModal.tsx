'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { smartSearch, SearchResult } from '@/lib/searchEngine';
import { PlatformIcon } from '@/components/ui/BrandIcons';
import { formatPrice } from '@/lib/utils';
import { 
  Search, 
  X, 
  Clock, 
  ArrowRight, 
  TrendingUp, 
  CornerDownLeft,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRENDING_SEARCHES = [
  { label: 'ChatGPT Plus', query: 'chatgpt' },
  { label: 'Claude Pro', query: 'claude' },
  { label: 'Canva Pro', query: 'canva' },
  { label: 'Gemini Advanced', query: 'gemini' },
  { label: 'Facebook Page Likes', query: 'facebook' },
  { label: 'YouTube Watch Time', query: 'youtube' },
];

export function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const isBn = locale === 'bn';

  // Smart Search Resolution
  const searchResult: SearchResult = useMemo(() => {
    return smartSearch(query);
  }, [query]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < searchResult.products.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev > 0 ? prev - 1 : searchResult.products.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (searchResult.products.length > 0 && searchResult.products[selectedIndex]) {
          const target = searchResult.products[selectedIndex];
          onClose();
          router.push(`/products/${target.slug}`);
        } else if (query.trim()) {
          onClose();
          router.push(`/products?search=${encodeURIComponent(query.trim())}`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, searchResult.products, selectedIndex, query, router, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-100 bg-white">
          <Search className="w-5 h-5 text-purple-600 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={isBn ? 'টুলস, সাবস্ক্রিপশন বা সোশ্যাল সার্ভিস খুঁজুন...' : 'Search tools, subscriptions or services...'}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 mr-2"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[11px] font-semibold text-slate-600 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Typo Correction Banner if applicable */}
        {searchResult.didYouMean && query.trim() && (
          <div className="px-4 py-2 bg-purple-50 border-b border-purple-100 flex items-center justify-between text-xs text-purple-900">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-purple-700">
                {isBn ? 'সংশোধিত ফলাফল:' : 'Smart Match:'}
              </span>
              <span>
                {isBn ? 'আপনার অনুসন্ধানের সম্ভাব্য প্রোডাক্ট হলো' : 'Did you mean'}{' '}
                <strong className="underline underline-offset-2">{searchResult.didYouMean}</strong>?
              </span>
            </div>
            {searchResult.suggestedCategory && (
              <span className="px-2 py-0.5 rounded-full bg-purple-200/60 text-purple-800 text-[10px] font-semibold">
                {searchResult.suggestedCategory}
              </span>
            )}
          </div>
        )}

        {/* Results List or Trending Chips */}
        <div className="overflow-y-auto flex-1 p-2 divide-y divide-slate-100">
          {query.trim() === '' ? (
            <div className="p-4 space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                  <span>{isBn ? 'জনপ্রিয় অনুসন্ধান' : 'Trending Searches'}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {TRENDING_SEARCHES.map((item) => (
                    <button
                      key={item.query}
                      onClick={() => setQuery(item.query)}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 text-xs font-semibold text-slate-700 hover:text-purple-700 transition-all cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>{isBn ? 'কীবোর্ড শর্টকাট' : 'Navigation Tip'}</span>
                <span className="text-[11px] font-medium text-slate-400">
                  ↑ ↓ নির্বাচন করুন • ↵ ওপেন করুন • ESC বন্ধ করুন
                </span>
              </div>
            </div>
          ) : searchResult.products.length === 0 ? (
            <div className="p-8 text-center space-y-2">
              <p className="text-sm font-bold text-slate-800">
                {isBn ? 'কোনো ফলাফল পাওয়া যায়নি' : 'No matching items found'}
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {isBn 
                  ? 'অনুগ্রহ করে অন্য কোনো কি-ওয়ার্ড অথবা ব্র্যান্ডের নাম দিয়ে পুনরায় চেষ্টা করুন।'
                  : 'Try typing an alternate spelling, tool name, or browse the entire catalog.'}
              </p>
              <div className="pt-3">
                <Link
                  href="/products"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-700 text-white text-xs font-semibold hover:bg-purple-800 transition-colors"
                >
                  <span>{isBn ? 'সব প্রোডাক্ট দেখুন' : 'Browse All Products'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-1 p-1">
              {searchResult.products.map((product, idx) => {
                const isSelected = idx === selectedIndex;
                const price = product.packages[0]?.price || product.basePrice;

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                      isSelected 
                        ? 'bg-purple-50/80 border border-purple-200 text-slate-900' 
                        : 'hover:bg-slate-50 border border-transparent text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                        <PlatformIcon platform={product.platform} className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {isBn ? product.name_bn : product.name_en}
                          </h4>
                          {product.badge_en && (
                            <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold shrink-0">
                              {isBn ? product.badge_bn : product.badge_en}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                          <span className="font-semibold text-purple-700">
                            {product.platform}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-emerald-600">
                            <Clock className="w-3 h-3" />
                            {isBn ? product.deliveryTime_bn : product.deliveryTime_en}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pl-3">
                      <div className="text-right">
                        <div className="text-xs font-black text-slate-900">
                          {formatPrice(price, locale)}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {isBn ? 'শুরু মাত্র' : 'Starting'}
                        </div>
                      </div>
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-purple-600 text-white' : 'text-slate-400'}`}>
                        <CornerDownLeft className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {searchResult.products.length > 0 && query.trim() && (
          <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">
              {isBn 
                ? `${searchResult.products.length} টি ফলাফল পাওয়া গেছে`
                : `${searchResult.products.length} matching items found`}
            </span>
            <Link
              href={`/products?search=${encodeURIComponent(query.trim())}`}
              onClick={onClose}
              className="font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1"
            >
              <span>{isBn ? 'সব ফলাফল দেখুন' : 'View all results'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
