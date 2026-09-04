'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  Zap,
  Headphones,
  Users,
  Target,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';

export default function AboutPage() {
  const { locale } = useLanguage();

  return (
    <div className="py-14 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-block text-xs font-bold text-purple-700 uppercase tracking-wider">
            {locale === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            {locale === 'bn'
              ? 'ডিজিটাল মার্ট বিডি — আপনার বিশ্বস্ত ডিজিটাল পার্টনার'
              : 'Digital Mart BD — Your Trusted Digital Partner'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {locale === 'bn'
              ? 'বাংলাদেশে সাশ্রয়ী ও সহজে আন্তর্জাতিক AI টুলস এবং সোশ্যাল মিডিয়া সার্ভিস পৌঁছে দেওয়ার লক্ষ্যে তৈরি একটি আধুনিক ডিজিটাল কমার্স প্ল্যাটফর্ম।'
              : 'A dedicated marketplace empowering students, freelancers, and businesses in Bangladesh with verified digital subscriptions and services.'}
          </p>
        </div>

        {/* Story & Mission Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {locale === 'bn' ? 'ডিজিটাল মার্ট বিডি কী এবং কেন?' : 'What is Digital Mart BD?'}
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              {locale === 'bn'
                ? 'বর্তমানে কোডিং, পড়াশোনা, কনটেন্ট ক্রিয়েশন কিংবা ফ্রিল্যান্সিং প্রতিটি ক্ষেত্রেই কৃত্রিম বুদ্ধিমত্তা (AI) এবং ডিজিটাল সার্ভিসগুলোর প্রয়োজন অনস্বীকার্য। কিন্তু আন্তর্জাতিক পেমেন্ট কার্ড বা ডলার এন্ডোর্সমেন্টের জটিলতার কারণে বাংলাদেশের অনেকেই সরাসরি প্রিমিয়াম সাবস্ক্রিপশন নিতে সমস্যার সম্মুখীন হন।'
                : 'Modern productivity, software engineering, and digital marketing heavily rely on global AI tools. However, lack of international payment cards and dual-currency hurdles often prevent Bangladeshi professionals and students from accessing these solutions.'}
            </p>
            <p>
              {locale === 'bn'
                ? 'ডিজিটাল মার্ট বিডি (Digital Mart BD) এই সমস্যা সমাধানের জন্যই তৈরি। আমরা দেশের সবচেয়ে জনপ্রিয় পেমেন্ট মেথড যেমন বিকাশ, নগদ এবং রকেটের মাধ্যমে গ্রাহকদের হাতে অতি দ্রুত প্রিমিয়াম ডিজিটাল সার্ভিস পৌঁছে দিই।'
                : 'Digital Mart BD bridges this gap by enabling frictionless local payments via bKash, Nagad, and Rocket with direct delivery to WhatsApp and email.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
              <Zap className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-slate-900 text-sm">
                {locale === 'bn' ? 'সহজ এক্সেস' : 'Easy Access'}
              </h3>
              <p className="text-xs text-slate-600">
                {locale === 'bn'
                  ? 'কোনো ডলার কার্ডের ঝামেলা ছাড়াই দেশীয় মুদ্রায় সার্ভিস অর্ডার করার সুযোগ।'
                  : 'Order without international credit card barriers using local BDT.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">
                {locale === 'bn' ? 'ফুল রিপ্লেসমেন্ট ওয়ারেন্টি' : 'Replacement Guarantee'}
              </h3>
              <p className="text-xs text-slate-600">
                {locale === 'bn'
                  ? 'প্রতিটি অর্ডারে মেয়াদের পুরো সময় টেকনিক্যাল ব্যাকআপ ও নিশ্চয়তা।'
                  : 'Complete technical assistance and replacement backup during subscription validity.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <Headphones className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-sm">
                {locale === 'bn' ? 'সরাসরি কাস্টমার কেয়ার' : 'Human Support'}
              </h3>
              <p className="text-xs text-slate-600">
                {locale === 'bn'
                  ? 'হোয়াটসঅ্যাপে আমাদের ডেডিকেটেড বাংলাদেশি সাপোর্ট টিম সবসময় সচল।'
                  : 'Friendly and responsive support directly over WhatsApp every day.'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link href="/products">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              {locale === 'bn' ? 'প্রোডাক্ট কালেকশন দেখুন' : 'Explore Products'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
