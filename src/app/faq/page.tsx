'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaqSection } from '@/components/home/FaqSection';
import { Button } from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

export default function FaqPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-purple-700">
            {t.navHome}
          </Link>
          <span>/</span>
          <span className="font-bold text-slate-800">FAQ</span>
        </div>

        <FaqSection />

        {/* Still have questions? */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 text-center max-w-xl mx-auto space-y-3">
          <h3 className="text-lg font-bold text-slate-900">
            {locale === 'bn' ? 'আরও কোনো প্রশ্ন আছে?' : 'Still have questions?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            {locale === 'bn'
              ? 'আমাদের সাপোর্ট টিম প্রতিদিন সকাল ১০:০০ টা থেকে রাত ১১:০০ টা পর্যন্ত হোয়াটসঅ্যাপে সরাসরি সক্রিয় থাকে।'
              : 'Our support team is available on WhatsApp every day from 10:00 AM to 11:00 PM.'}
          </p>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{locale === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপে কথা বলুন' : 'Chat with Us on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
