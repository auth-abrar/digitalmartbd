'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DeliveryPolicyPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="py-14 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-purple-700">
            {t.navHome}
          </Link>
          <span>/</span>
          <span className="font-bold text-slate-800">
            {locale === 'bn' ? 'ডেলিভারি পলিসি' : 'Delivery Policy'}
          </span>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">
            {locale === 'bn' ? 'ডিজিটাল প্রোডাক্ট ডেলিভারি পলিসি' : 'Digital Product Delivery Policy'}
          </h1>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '১. ডেলিভারির মাধ্যম' : '1. Delivery Channels'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'ডিজিটাল মার্ট বিডি-এর সকল প্রোডাক্ট ও সার্ভিস ডিজিটাল মাধ্যমে সরবরাহ করা হয়। কোনো ফিজিক্যাল পার্সেল পাঠানো হয় না। অর্ডারের সময় প্রদানকৃত হোয়াটসঅ্যাপ নম্বর অথবা ইমেইলে সরাসরি লগইন তথ্য ও গাইডলাইন পাঠানো হয়।'
                : 'All Digital Mart BD offerings are 100% digital. No physical parcels are dispatched. Credentials and instructions are transmitted securely directly to the customer’s WhatsApp number or email address.'}
            </p>

            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '২. ডেলিভারি সময়সীমা' : '2. Estimated Turnaround Time'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'পেমেন্ট সফলভাবে ভেরিফাই হওয়ার ১৫ থেকে ৩০ মিনিটের মধ্যে ডিজিটাল সাবস্ক্রিপশন ডেলিভারি সম্পন্ন হয়। সোশ্যাল মিডিয়া সার্ভিসের ক্ষেত্রে অর্ডারের পরিমাণ অনুযায়ী সাধারণত ৬ থেকে ২৪ ঘণ্টার মধ্যে ডেলিভারি সম্পন্ন হয়।'
                : 'Standard AI software tools and subscriptions are fulfilled within 15–30 minutes following payment verification. Social media growth orders generally complete within 6–24 hours depending on package size.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
