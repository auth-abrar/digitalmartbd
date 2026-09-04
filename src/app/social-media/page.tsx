'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Share2, Users, ShieldAlert, CheckCircle, Lock } from 'lucide-react';
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from '@/components/ui/BrandIcons';

export default function SocialMediaPage() {
  const { locale } = useLanguage();
  const smProducts = PRODUCTS.filter((p) => p.category === 'social-media');

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Category Hero */}
        <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden border border-blue-900/50">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-blue-200 text-xs font-bold border border-white/15">
              <Share2 className="w-4 h-4 text-blue-300" />
              <span>{locale === 'bn' ? 'সোশ্যাল মিডিয়া গ্রোথ' : 'Social Media Solutions'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {locale === 'bn'
                ? 'ফেসবুক, ইনস্টাগ্রাম ও ইউটিউব সার্ভিস'
                : 'Facebook, Instagram & YouTube Growth Services'}
            </h1>
            <p className="text-sm sm:text-base text-blue-200/90 leading-relaxed font-normal">
              {locale === 'bn'
                ? 'আপনার পেজ, চ্যানেল বা প্রোফাইলের সোশ্যাল প্রুফ এবং বিশ্বাসযোগ্যতা বৃদ্ধি করুন সম্পূর্ণ নিরাপদ পদ্ধতিতে। কোনো পাসওয়ার্ড ছাড়াই শুধুমাত্র পাবলিক লিংকের মাধ্যমে দ্রুত ডেলিভারি।'
                : 'Build credibility and initial social proof for your business pages, channels, and profiles safely without ever providing account passwords.'}
            </p>

            {/* Social Media Logos Row */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-semibold">
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-semibold">
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-semibold">
                <YouTubeIcon className="w-4 h-4 text-red-500" />
                <span>YouTube</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {locale === 'bn' ? 'সকল সোশ্যাল মিডিয়া সার্ভিস' : 'All Social Media Services'}
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {smProducts.length} {locale === 'bn' ? 'টি সার্ভিস' : 'Services'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {smProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Ethical / Transparent Guidelines Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <ShieldAlert className="w-5 h-5 text-purple-600" />
            <span>
              {locale === 'bn'
                ? 'সোশ্যাল মিডিয়া সার্ভিসের শর্তাবলী ও স্বচ্ছতা'
                : 'Important Conditions & Honest Guidelines'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>{locale === 'bn' ? 'কোনো পাসওয়ার্ড প্রয়োজন নেই' : 'Zero Password Policy'}</span>
              </div>
              <p>
                {locale === 'bn'
                  ? 'আমরা কখনো কাস্টমারের ফেসবুক, ইনস্টাগ্রাম বা জিমেইল পাসওয়ার্ড চাই না। ডেলিভারির জন্য শুধুমাত্র আপনার পাবলিক লিংকটি যথেষ্ট।'
                  : 'We never request passwords. Only your public page URL or channel link is needed.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>{locale === 'bn' ? 'পরিমিত ন্যাচারাল স্পিড' : 'Natural Delivery Pacing'}</span>
              </div>
              <p>
                {locale === 'bn'
                  ? 'অ্যাকাউন্টের সুরক্ষা বজায় রাখতে নির্দিষ্ট বিরতিতে ধাপে ধাপে ডেলিভারি সম্পন্ন হয়, যাতে প্ল্যাটফর্মের নিয়মের কোনো ব্যত্যয় না ঘটে।'
                  : 'Delivered in steady batches to adhere cleanly to platform moderation standards and safeguard account health.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>{locale === 'bn' ? 'বাস্তবসম্মত ফলাফল' : 'Realistic Expectations'}</span>
              </div>
              <p>
                {locale === 'bn'
                  ? 'এই সার্ভিসগুলো আপনার পেজ বা চ্যানেলের সোশ্যাল প্রুফ বাড়ানোর জন্য সহায়ক। কোনো অবাস্তব ভাইরাল বা আয়ের গ্যারান্টি আমরা প্রদান করি না।'
                  : 'These services provide essential visual credibility and social proof. We do not promise viral fame or instant monetization.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
