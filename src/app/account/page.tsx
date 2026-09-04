'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Order } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BUSINESS_CONFIG } from '@/config/business';
import {
  User,
  ShoppingBag,
  Clock,
  CheckCircle2,
  Headphones,
  Settings,
  LogOut,
  ExternalLink,
} from 'lucide-react';

export default function AccountPage() {
  const { locale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'profile' | 'support'>('dashboard');
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const savedOrders = JSON.parse(
        localStorage.getItem('digitalmart_orders') || '[]'
      );
      setOrders(savedOrders);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Profile Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
              DM
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {locale === 'bn' ? 'আমার কাস্টমার ড্যাশবোর্ড' : 'Customer Dashboard'}
              </h1>
              <p className="text-xs text-slate-500">
                {locale === 'bn'
                  ? 'আপনার সকল অর্ডার ও অ্যাকাউন্টের বিবরণ'
                  : 'Manage your active subscriptions & orders'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/products">
              <Button variant="primary" size="sm">
                {locale === 'bn' ? 'নতুন অর্ডার' : 'New Order'}
              </Button>
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            {locale === 'bn' ? 'ওভারভিউ' : 'Overview'}
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            {locale === 'bn' ? 'আমার অর্ডারসমূহ' : 'My Orders'} ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'support'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            {locale === 'bn' ? 'হেল্প ও সাপোর্ট' : 'Support Helpdesk'}
          </button>
        </div>

        {/* Tab 1: Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">
                  {locale === 'bn' ? 'মোট সম্পন্ন অর্ডার' : 'Total Orders Placed'}
                </span>
                <div className="text-2xl font-black text-slate-900 mt-1">
                  {orders.length}
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">
                  {locale === 'bn' ? 'অ্যাক্টিভ সার্ভিস' : 'Active Services'}
                </span>
                <div className="text-2xl font-black text-purple-700 mt-1">
                  {orders.length > 0 ? orders.length : 0}
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">
                  {locale === 'bn' ? 'সাপোর্ট স্ট্যাটাস' : 'Support Status'}
                </span>
                <div className="text-sm font-bold text-emerald-600 mt-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{locale === 'bn' ? 'সক্রিয় (অনলাইন)' : 'Active (Online)'}</span>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                {locale === 'bn' ? 'সাম্প্রতিক অর্ডার' : 'Recent Orders'}
              </h3>

              {orders.length === 0 ? (
                <div className="text-center py-8 text-slate-500 space-y-2">
                  <p className="text-xs sm:text-sm">
                    {locale === 'bn'
                      ? 'আপনার কোনো পূর্ববর্তী অর্ডার রেকর্ড পাওয়া যায়নি।'
                      : 'No previous order records found on this browser.'}
                  </p>
                  <Link href="/products" className="inline-block pt-2">
                    <Button variant="outline" size="sm">
                      {t.startShopping}
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {orders.slice(0, 3).map((o) => (
                    <div key={o.id} className="py-3.5 flex items-center justify-between gap-4">
                      <div>
                        <div className="font-mono text-xs font-bold text-purple-700">
                          {o.id}
                        </div>
                        <div className="text-xs text-slate-700 font-medium mt-0.5">
                          {o.items.map((i) => (locale === 'bn' ? i.productName_bn : i.productName_en)).join(', ')}
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {new Date(o.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-sm font-black text-slate-900">
                          {formatPrice(o.totalAmount, locale)}
                        </div>
                        <Link
                          href={`/track-order?id=${o.id}`}
                          className="text-[11px] text-purple-700 hover:underline font-semibold"
                        >
                          {locale === 'bn' ? 'ট্র্যাক করুন →' : 'Track →'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Orders */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? 'আপনার সকল অর্ডার' : 'Order History'}
            </h3>

            {orders.length === 0 ? (
              <div className="text-center py-10 text-slate-500 text-xs">
                {locale === 'bn' ? 'কোনো অর্ডার নেই।' : 'No orders placed yet.'}
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {orders.map((o) => (
                  <div key={o.id} className="py-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs font-bold text-purple-800">
                        {o.id}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        {o.orderStatus}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600">
                      {o.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>
                            {locale === 'bn' ? item.productName_bn : item.productName_en} (
                            {locale === 'bn' ? item.packageName_bn : item.packageName_en})
                          </span>
                          <span className="font-bold">
                            {formatPrice(item.price * item.quantity, locale)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 flex justify-between items-center text-xs border-t border-slate-100">
                      <span className="text-slate-400 font-mono">TrxID: {o.transactionId}</span>
                      <Link
                        href={`/track-order?id=${o.id}`}
                        className="font-bold text-purple-700 hover:underline"
                      >
                        {t.trackOrderBtn}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Support */}
        {activeTab === 'support' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? 'সাপোর্ট ডেস্ক' : 'Support Helpdesk'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {locale === 'bn'
                ? 'আপনার কোনো অ্যাকাউন্ট রিফ্রেশ বা রিপ্লেসমেন্ট প্রয়োজন হলে সরাসরি আমাদের হোয়াটসঅ্যাপে মেসেজ করুন।'
                : 'Need immediate account assistance or replacement? Contact our support line directly.'}
            </p>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs"
            >
              <Headphones className="w-4 h-4" />
              <span>{locale === 'bn' ? 'হোয়াটসঅ্যাপে মেসেজ পাঠান' : 'Contact Support on WhatsApp'}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
