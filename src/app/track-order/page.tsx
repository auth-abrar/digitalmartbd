'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Order } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BUSINESS_CONFIG } from '@/config/business';
import {
  Search,
  CheckCircle2,
  Clock,
  Package,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || '';

  const { locale, t } = useLanguage();
  const [query, setQuery] = useState(initialId);
  const [searchedOrder, setSearchedOrder] = useState<Order | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (initialId) {
      handleSearch(initialId);
    }
  }, [initialId]);

  const handleSearch = (searchVal: string) => {
    const val = searchVal.trim().toUpperCase();
    if (!val) return;

    setHasSearched(true);
    try {
      const orders: Order[] = JSON.parse(
        localStorage.getItem('digitalmart_orders') || '[]'
      );
      const match = orders.find(
        (o) =>
          o.id.toUpperCase() === val ||
          o.customerPhone.includes(val) ||
          o.transactionId.toUpperCase() === val
      );
      setSearchedOrder(match || null);
    } catch (e) {
      console.error(e);
      setSearchedOrder(null);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="py-14 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.trackOrderTitle}
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            {t.trackOrderSubtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8">
          <form onSubmit={onSubmit} className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.trackInputPlaceholder}
                className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
            <Button variant="primary" size="md" type="submit">
              {t.trackButton}
            </Button>
          </form>
        </div>

        {/* Results display */}
        {hasSearched && !searchedOrder && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? 'কোনো অর্ডার খুঁজে পাওয়া যায়নি' : 'No Order Found'}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {locale === 'bn'
                ? 'অনুগ্রহ করে সঠিক অর্ডার আইডি অথবা ফোন নম্বর দিয়ে আবার চেষ্টা করুন। প্রয়োজনে আমাদের হোয়াটসঅ্যাপে যোগাযোগ করুন।'
                : 'Please verify the Order ID or phone number, or reach out on WhatsApp.'}
            </p>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 pt-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{locale === 'bn' ? 'হোয়াটসঅ্যাপ হেল্পলাইন' : 'WhatsApp Helpline'}</span>
            </a>
          </div>
        )}

        {searchedOrder && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs text-slate-400 font-medium">{t.orderId}</span>
                <div className="text-lg font-black text-purple-900 font-mono">
                  {searchedOrder.id}
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {searchedOrder.orderStatus === 'completed'
                    ? t.statusCompleted
                    : t.statusProcessing}
                </span>
              </div>
            </div>

            {/* Progress Stepper */}
            <div className="py-2">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-800">
                    {locale === 'bn' ? 'অর্ডার গ্রহণ' : 'Received'}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-purple-700">
                    {locale === 'bn' ? 'প্রসেসিং হচ্ছে' : 'Processing'}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 border border-slate-200 flex items-center justify-center mx-auto">
                    <Package className="w-4 h-4" />
                  </div>
                  <span className="text-slate-400 font-medium">
                    {locale === 'bn' ? 'ডেলিভারি সম্পন্ন' : 'Delivered'}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-slate-50 rounded-2xl p-4 space-y-2 text-xs">
              <div className="font-bold text-slate-700 mb-2">
                {locale === 'bn' ? 'অর্ডারের আইটেমসমূহ:' : 'Ordered Items:'}
              </div>
              {searchedOrder.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-1">
                  <div>
                    <span className="font-semibold text-slate-900">
                      {locale === 'bn' ? item.productName_bn : item.productName_en}
                    </span>
                    <span className="text-purple-600 block text-[11px]">
                      {locale === 'bn' ? item.packageName_bn : item.packageName_en} × {item.quantity}
                    </span>
                  </div>
                  <span className="font-bold text-slate-900">
                    {formatPrice(item.price * item.quantity, locale)}
                  </span>
                </div>
              ))}
              <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-sm">
                <span>{t.total}:</span>
                <span className="text-purple-700 font-black">
                  {formatPrice(searchedOrder.totalAmount, locale)}
                </span>
              </div>
            </div>

            {/* WhatsApp follow up */}
            <div className="pt-2 text-center">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Support, tracking Order ${searchedOrder.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {locale === 'bn'
                    ? 'এই অর্ডারের জন্য হোয়াটসঅ্যাপে কথা বলুন'
                    : 'Chat on WhatsApp About This Order'}
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading tracking...</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}
