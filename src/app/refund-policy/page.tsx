'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RefundPolicyPage() {
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
            {locale === 'bn' ? 'রিফান্ড ও রিটার্ন পলিসি' : 'Refund Policy'}
          </span>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">
            {locale === 'bn' ? 'রিফান্ড ও রিটার্ন পলিসি' : 'Refund & Return Policy'}
          </h1>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '১. রিপ্লেসমেন্ট ওয়ারেন্টি' : '1. Replacement Warranty'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'ডিজিটাল সাবস্ক্রিপশনে যদি কোনো ধরনের মেম্বারশিপ এরর বা লগইন ইস্যু দেখা দেয়, আমাদের সাপোর্ট টিম দ্রুত রিপ্লেসমেন্ট ক্রেডেনশিয়াল প্রদান করবে।'
                : 'All subscription orders include full-tenure replacement coverage. If an account encounters technical credential issues, a fresh replacement is issued promptly.'}
            </p>

            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '২. রিফান্ড পাওয়ার শর্ত' : '2. Refund Eligibility'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'যদি কোনো অর্ডার প্লেস করার পর টেকনিক্যাল সমস্যার কারণে আমরা প্রোডাক্ট ডেলিভারি দিতে ব্যর্থ হই এবং কোনো বিকল্প সমাধান দিতে না পারি, তবে কাস্টমারকে সম্পূর্ণ টাকা রিফান্ড করা হবে।'
                : 'If an order cannot be fulfilled due to technical limitations or unavailability and no suitable alternative can be provided, a 100% refund is processed back to the sending bKash or Nagad number.'}
            </p>

            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '৩. যেসব ক্ষেত্রে রিফান্ড প্রযোজ্য নয়' : '3. Non-Refundable Scenarios'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'সফলভাবে ডেলিভারি সম্পন্ন হওয়া এবং কাস্টমার কর্তৃক ব্যবহারে কোনো সমস্যা না থাকা অবস্থায় মন পরিবর্তন হলে রিফান্ড প্রযোজ্য হবে না।'
                : 'Once an account or service has been successfully verified, utilized, and delivered without defect, refunds requested purely due to change of mind cannot be accommodated.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
