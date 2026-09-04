'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';

export default function PrivacyPolicyPage() {
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
            {locale === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
          </span>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">
            {locale === 'bn' ? 'প্রাইভেসি পলিসি — ডিজিটাল মার্ট বিডি' : 'Privacy Policy — Digital Mart BD'}
          </h1>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '১. সংগৃহীত তথ্যাবলী' : '1. Information We Collect'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'ডিজিটাল মার্ট বিডি শুধুমাত্র অর্ডার প্রসেসিং ও ডেলিভারির প্রয়োজনে কাস্টমারের নাম, হোয়াটসঅ্যাপ নম্বর, ইমেইল অ্যাড্রেস এবং ট্রানজেকশন আইডি সংগ্রহ করে। আমরা কোনো অনাবশ্যক ব্যক্তিগত তথ্য বা ব্যাংকিং পাসওয়ার্ড সংগ্রহ করি না।'
                : 'Digital Mart BD collects only the essential details required to process your order and fulfill digital delivery: your name, WhatsApp/phone number, email address, and payment transaction reference.'}
            </p>

            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '২. তথ্যের নিরাপত্তা ও ব্যবহার' : '2. Data Security & Usage'}
            </h2>
            <p>
              {locale === 'bn'
                ? 'আপনার ফোন নম্বর ও ইমেইল শুধুমাত্র আপনার অর্ডারের ডেলিভারি প্রদান এবং কাস্টমার সাপোর্ট দেওয়ার জন্য ব্যবহৃত হয়। কোনো তৃতীয় পক্ষের কাছে গ্রাহকের তথ্য বিক্রি বা হস্তান্তর করা হয় না।'
                : 'Your contact details are solely used for digital product delivery, confirmation, and support inquiries. We never sell, rent, or trade your personal information with third parties.'}
            </p>

            <h2 className="text-base font-bold text-slate-900">
              {locale === 'bn' ? '৩. যোগাযোগ' : '3. Contacting Us'}
            </h2>
            <p>
              {locale === 'bn'
                ? `প্রাইভেসি বা তথ্য সম্পর্কিত যেকোনো প্রশ্নের জন্য আমাদের সাথে ${BUSINESS_CONFIG.email} অথবা হোয়াটসঅ্যাপে যোগাযোগ করতে পারেন।`
                : `For questions regarding our privacy practices, contact us at ${BUSINESS_CONFIG.email} or directly via WhatsApp.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
