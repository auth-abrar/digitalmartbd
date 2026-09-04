'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function HowItWorksPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="py-10 bg-slate-50 min-h-screen space-y-12">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-purple-700">
            {t.navHome}
          </Link>
          <span>/</span>
          <span className="font-bold text-slate-800">{t.navHowItWorks}</span>
        </div>
      </div>

      <HowItWorks />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {locale === 'bn' ? 'অর্ডার ও ডেলিভারি সংক্রান্ত বিস্তারিত তথ্য' : 'Order & Delivery Information'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Clock className="w-4 h-4 text-purple-600" />
                <span>{locale === 'bn' ? 'ডেলিভারি সময়সীমা' : 'Delivery Timescale'}</span>
              </div>
              <p>
                {locale === 'bn'
                  ? 'বেশিরভাগ ডিজিটাল প্রোডাক্ট (যেমন চ্যাটজিপিটি, ক্লড, ক্যানভা) পেমেন্ট সফল হওয়ার ১৫ থেকে ৩০ মিনিটের মধ্যে আপনার হোয়াটসঅ্যাপে ডেলিভারি করা হয়।'
                  : 'Most AI tools are delivered within 15–30 minutes to your WhatsApp or Email after payment confirmation.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{locale === 'bn' ? 'ওয়ারেন্টি ব্যাকআপ' : 'Warranty & Support'}</span>
              </div>
              <p>
                {locale === 'bn'
                  ? 'সাবস্ক্রিপশনের মেয়াদের পুরো সময়ে যেকোনো টেকনিক্যাল ডিসরাপশনে রিপ্লেসমেন্ট সাপোর্ট প্রদান করা হয়।'
                  : 'Full replacement warranty applies throughout the active subscription duration.'}
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/products">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                {t.heroCtaPrimary}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
