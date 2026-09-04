'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Bot, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import {
  ChatGptIcon,
  ClaudeIcon,
  GeminiIcon,
  PerplexityIcon,
} from '@/components/ui/BrandIcons';

export default function AiToolsPage() {
  const { locale } = useLanguage();
  const aiProducts = PRODUCTS.filter((p) => p.category === 'ai-tools');

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Category Hero */}
        <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden border border-purple-900/50">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-purple-200 text-xs font-bold border border-white/15">
              <Bot className="w-4 h-4 text-purple-300" />
              <span>{locale === 'bn' ? 'প্রিমিয়াম AI হাব' : 'Premium AI Hub'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {locale === 'bn'
                ? 'চ্যাটজিপিটি, ক্লড ও প্রয়োজনীয় AI টুলস'
                : 'ChatGPT, Claude & Productivity AI Tools'}
            </h1>
            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-normal">
              {locale === 'bn'
                ? 'কোডিং, কনটেন্ট ক্রিয়েশন, রিসার্চ এবং পড়াশোনার গতি বহুগুণ বাড়াতে বিশ্বের সেরা সব AI সাবস্ক্রিপশন এখন এক জায়গায়। ১৫–৩০ মিনিটে ইনস্ট্যান্ট ডেলিভারি ও ফুল রিপ্লেসমেন্ট ওয়ারেন্টি।'
                : 'Accelerate your workflow, programming, and content creation with global AI subscriptions delivered within 15–30 minutes.'}
            </p>

            {/* Platform Brand Logos Row */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-semibold">
                <ChatGptIcon className="w-4 h-4 text-emerald-400" />
                <span>ChatGPT</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-semibold">
                <ClaudeIcon className="w-4 h-4 text-amber-400" />
                <span>Claude</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-semibold">
                <GeminiIcon className="w-4 h-4 text-blue-400" />
                <span>Gemini</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-semibold">
                <PerplexityIcon className="w-4 h-4 text-cyan-400" />
                <span>Perplexity</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-purple-500/20 to-transparent pointer-events-none" />
        </div>

        {/* Products Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {locale === 'bn' ? 'সকল AI সাবস্ক্রিপশন' : 'All Available AI Subscriptions'}
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {aiProducts.length} {locale === 'bn' ? 'টি প্রোডাক্ট' : 'Products'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {aiProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Explanatory FAQ / Conditions */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-900">
            {locale === 'bn' ? 'AI সাবস্ক্রিপশন ব্যবহারের নিয়মাবলী ও নিরাপত্তা' : 'AI Subscriptions Information & Safety'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 space-y-1.5">
              <h4 className="font-bold text-slate-900">
                {locale === 'bn' ? 'শেয়ার্ড বনাম প্রাইভেট অ্যাকাউন্ট' : 'Shared vs. Private Accounts'}
              </h4>
              <p>
                {locale === 'bn'
                  ? 'শেয়ার্ড প্যাকেজে আপনি সাশ্রয়ী খরচে সমস্ত প্রিমিয়াম ফিচার ব্যবহার করতে পারবেন। অন্যদিকে প্রাইভেট প্যাকেজে সম্পূর্ণ আপনার নিজস্ব জিমেইল অ্যাকাউন্টে এক্সেস দেওয়া হয়।'
                  : 'Shared tiers provide full premium features at a budget-friendly price. Private tiers are provisioned directly to your personal email for complete chat privacy.'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 space-y-1.5">
              <h4 className="font-bold text-slate-900">
                {locale === 'bn' ? 'ওয়ারেন্টি ও সাপোর্ট পলিসি' : 'Warranty & Support Assurance'}
              </h4>
              <p>
                {locale === 'bn'
                  ? 'প্রতিটি অর্ডারে মেয়াদের পুরো ৩০ দিন রিপ্লেসমেন্ট ওয়ারেন্টি প্রযোজ্য। কোনো টেকনিক্যাল সমস্যা হলে আমাদের সাপোর্ট ইনবক্সে মেসেজ দিলেই দ্রুত সমাধান পাবেন।'
                  : 'Every order carries a full replacement warranty. Our WhatsApp support is active every day for rapid problem resolution.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
