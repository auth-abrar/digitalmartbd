'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsPage() {
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
            {locale === 'bn' ? 'টার্মস & কন্ডিশন' : 'Terms & Conditions'}
          </span>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">
            {locale === 'bn' ? 'ব্যবহারের শর্তাবলী (Terms & Conditions)' : 'Terms & Conditions'}
          </h1>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '১. সেবার ধরন' : '1. Nature of Services'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'ডিজিটাল মার্ট বিডি একটি স্বাধীন ডিজিটাল সাবস্ক্রিপশন ও সোশ্যাল মিডিয়া সার্ভিস ম্যানেজমেন্ট প্ল্যাটফর্ম। আমরা কোনো সফটওয়্যার বা সোশ্যাল মিডিয়া নেটওয়ার্কের মূল মালিকানা দাবি করি না এবং সংশ্লিষ্ট কোম্পানিগুলোর কোনো অফিসিয়াল পার্টনার নই।'
                : 'Digital Mart BD provides independent digital subscription assistance and social media solutions. We do not claim ownership or official partnership with the underlying platforms.'}
            </p>

            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '২. শেয়ার্ড অ্যাকাউন্টের নিয়মাবলী' : '2. Shared Account Rules'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'শেয়ার্ড প্যাকেজের ক্ষেত্রে পাসওয়ার্ড বা অ্যাকাউন্টের সেটিংস পরিবর্তন করা কঠোরভাবে নিষিদ্ধ। কোনো গ্রাহক পাসওয়ার্ড বা প্রোফাইল মডিফাই করলে তার সার্ভিস বাতিল হতে পারে।'
                : 'For shared tier subscriptions, modifying passwords, email credentials, or profile settings is strictly forbidden and results in forfeiture of warranty.'}
            </p>

            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '৩. সোশ্যাল মিডিয়া সার্ভিস নিয়ম' : '3. Social Media Delivery Terms'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'সোশ্যাল মিডিয়া সার্ভিসের কাজ চলাকালীন সময়ে পেজ বা প্রোফাইল পাবলিক রাখতে হবে। কোনো অবস্থাতেই পাসওয়ার্ড চাওয়া হবে না।'
                : 'Target profiles and pages must remain public throughout the delivery timeframe. Passwords will never be solicited.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
