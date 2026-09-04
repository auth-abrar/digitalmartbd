'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';
import { 
  RefreshCw, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  CreditCard, 
  MessageSquare,
  ExternalLink,
  HelpCircle,
  Clock
} from 'lucide-react';

export default function RefundPolicyPage() {
  const { locale, t } = useLanguage();

  const isBn = locale === 'bn';

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-purple-700 transition-colors">
            {t.navHome}
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">
            {isBn ? 'রিফান্ড ও রিপ্লেসমেন্ট পলিসি' : 'Refund & Warranty Policy'}
          </span>
        </div>

        {/* Policy Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm space-y-10">
          {/* Header */}
          <div className="border-b border-slate-100 pb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {isBn ? '১০০% কাস্টমার সুরক্ষা গ্যারান্টি' : '100% Customer Protection Warranty'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {isBn ? 'রিফান্ড ও রিপ্লেসমেন্ট ওয়ারেন্টি পলিসি' : 'Refund & Replacement Warranty Policy'}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-slate-500">
              {isBn 
                ? 'সর্বশেষ হালনাগাদ: মার্চ ২০২৬ | স্বচ্ছতা ও গ্রাহক সন্তুষ্টি নিশ্চিতকরণ'
                : 'Last Updated: March 2026 | Dedicated to customer trust & satisfaction'}
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? 'ইনস্ট্যান্ট রিপ্লেসমেন্ট' : 'Instant Replacement'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'সাবস্ক্রিপশনের মেয়াদ চলাকালীন কোনো টেকনিক্যাল সমস্যা হলে ফ্রি রিপ্লেসমেন্ট'
                  : 'Full replacement coverage during active subscription tenure'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? '২৪–৪৮ ঘণ্টার মধ্যে রিফান্ড' : '24–48h Refund Processing'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'সার্ভিস সরবরাহে ব্যর্থ হলে সরাসরি বিকাশ বা নগদে পুরো টাকা ফেরত'
                  : '100% money-back guarantee via bKash or Nagad if unfulfilled'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? 'সরাসরি সাপোর্ট টিম' : 'Direct Support Team'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'যেকোনো অভিযোগে হোয়াটসঅ্যাপে সরাসরি যোগাযোগ করার সুবিধা'
                  : 'Fast response via official WhatsApp hotline'}
              </p>
            </div>
          </div>

          {/* Section 1: Replacement Warranty */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">1</span>
              {isBn ? 'ডিজিটাল সাবস্ক্রিপশন রিপ্লেসমেন্ট ওয়ারেন্টি' : 'Subscription Replacement Guarantee'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'ডিজিটাল মার্ট বিডি থেকে ক্রয়কৃত প্রতিটি প্রিমিয়াম সাবস্ক্রিপশনে (যেমন: ChatGPT Plus, Claude Pro, Gemini Advanced, Perplexity Pro, Canva Pro) সংশ্লিষ্ট মেয়াদের পূর্ণ ওয়ারেন্টি অন্তর্ভুক্ত থাকে।'
                  : 'Every digital tool subscription purchased from Digital Mart BD includes full tenure warranty coverage throughout the purchased validity duration.'}
              </p>
              <p>
                {isBn
                  ? 'যদি কোনো অ্যাকাউন্টে অপ্রত্যাশিত সেশন লগআউট, ইনভ্যালিড ক্রেডেনশিয়াল বা সাবস্ক্রিপশন ড্রপ সংক্রান্ত ত্রুটি পরিলক্ষিত হয়, আমাদের সাপোর্ট টিম অভিযোগ প্রাপ্তির ১ থেকে ৩ ঘণ্টার মধ্যে নতুন অ্যাক্সেস প্রদান করে রিপ্লেসমেন্ট নিশ্চিত করবে।'
                  : 'Should you experience session expiration or credential invalidation during your active package period, our technical desk will audit and issue a fresh working replacement within 1–3 business hours.'}
              </p>
            </div>
          </section>

          {/* Section 2: Refund Eligibility */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">2</span>
              {isBn ? '১০০% ক্যাশ রিফান্ড পাওয়ার শর্তাবলী' : 'Full Cash Refund Eligibility'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'নিচের পরিস্থিতিগুলোতে গ্রাহক সম্পূর্ণ টাকা রিফান্ড পাওয়ার যোগ্য বলে বিবেচিত হবেন:'
                  : 'Customers are fully eligible for an unconditional 100% monetary refund under the following conditions:'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    {isBn
                      ? 'অর্ডার নিশ্চিতকরণের পর কোনো সফটওয়্যার সংকট বা কারিগরি সমস্যার কারণে যদি আমরা ২৪ ঘণ্টার মধ্যে সার্ভিস সক্রিয় করতে ব্যর্থ হই।'
                      : 'Failure on our part to deliver working access or start growth services within 24 hours of payment verification.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    {isBn
                      ? 'রিপ্লেসমেন্ট ওয়ারেন্টির অধীনে থাকা কোনো অ্যাকাউন্টের সমস্যা সমাধান বা বিকল্প সরবরাহ করতে আমরা যদি সম্পূর্ণ ব্যর্থ হই।'
                      : 'Inability to provide a functioning replacement in the event of an irrecoverable tool outage during warranty.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    {isBn
                      ? 'ভুলবশত গ্রাহক একই অর্ডারের জন্য অতিরিক্ত অর্থ প্রেরণ করলে অতিরিক্ত অর্থ দ্রুততম সময়ে রিফান্ড করা হবে।'
                      : 'Accidental double payment or duplicate charges for the same order transaction.'}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Non-Refundable Scenarios */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">3</span>
              {isBn ? 'যেসব ক্ষেত্রে রিফান্ড বা ওয়ারেন্টি প্রযোজ্য হবে না' : 'Non-Refundable & Voided Situations'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'নিচের কারণগুলোতে রিফান্ড বা রিপ্লেসমেন্ট দাবি বাতিল বলে গণ্য হবে:'
                  : 'Warranty replacement or monetary refunds cannot be granted under the following circumstances:'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'শেয়ার্ড অ্যাকাউন্টের ক্রেডেনশিয়াল পরিবর্তন:' : 'Shared Account Tampering:'}</strong>{' '}
                    {isBn
                      ? 'শেয়ার্ড প্ল্যানে পাসওয়ার্ড, রিকভারি ইমেইল বা বিলিং সেটিংস পরিবর্তন করার চেষ্টা করলে অ্যাকাউন্টের অ্যাক্সেস অবিলম্বে বাতিল হবে এবং কোনো ওয়ারেন্টি বা রিফান্ড প্রযোজ্য হবে না।'
                      : 'Attempting to change passwords, recovery emails, or user profiles on shared subscriptions violates terms and voids warranty immediately.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'সফল ডেলিভারির পর মন পরিবর্তন:' : 'Post-Delivery Change of Mind:'}</strong>{' '}
                    {isBn
                      ? 'যেহেতু ডিজিটাল পণ্য বা সফটওয়্যার লাইসেন্স ডেলিভারির পর ফেরত নেওয়া সম্ভব নয়, তাই ত্রুটিমুক্ত ডেলিভারির পর কাস্টমারের নিজস্ব মত পরিবর্তনের ভিত্তিতে রিফান্ড প্রদান সম্ভব নয়।'
                      : 'Digital credentials and completed service campaigns cannot be returned once delivered in functioning order.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'ভুল টার্গেট লিংক প্রদান:' : 'Incorrect Target URL for Social Media:'}</strong>{' '}
                    {isBn
                      ? 'সোশ্যাল মিডিয়া সার্ভিসে ভুল পেজ বা পোস্টের লিংক দিলে এবং ক্যাম্পেইন কার্যকর হয়ে গেলে পুনরায় রিফান্ড দেওয়া সম্ভব হবে না।'
                      : 'Campaigns fulfilled to an incorrect, misspelled, or private link provided by the customer are non-refundable once initiated.'}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Refund Claim Process */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">4</span>
              {isBn ? 'রিফান্ড বা রিপ্লেসমেন্ট দাবি করার নিয়ম' : 'How to Claim a Refund or Warranty'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'আপনার অর্ডারে কোনো সমস্যা পরিলক্ষিত হলে নিচের ধাপগুলো অনুসরণ করে ক্লেইম করুন:'
                  : 'Follow these straightforward steps to request immediate inspection:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-xs mb-1">ধাপ ১: তথ্য সংগ্রহ</div>
                  <p className="text-xs text-slate-600">আপনার অর্ডার আইডি (Order ID) এবং সমস্যার স্ক্রিনশট সংগ্রহ করুন।</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-xs mb-1">ধাপ ২: মেসেজ দিন</div>
                  <p className="text-xs text-slate-600">আমাদের অফিসিয়াল হোয়াটসঅ্যাপ সাপোর্টে বিস্তারিত লিখে মেসেজ পাঠান।</p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-xs mb-1">ধাপ ৩: সমাধান ও রিফান্ড</div>
                  <p className="text-xs text-slate-600">টিম সমস্যা ভেরিফাই করে রিপ্লেসমেন্ট অথবা বিকাশ/নগদে রিফান্ড সম্পন্ন করবে।</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                {isBn ? 'রিফান্ড বা সমস্যা সমাধানের জন্য যোগাযোগ করুন' : 'Have a warranty inquiry or issue?'}
              </h3>
              <p className="text-xs text-slate-600">
                {isBn 
                  ? 'আমাদের কাস্টমার কেয়ার টিম আপনাকে সর্বোচ্চ সহায়তা দিতে প্রস্তুত রয়েছে।'
                  : 'Our dedicated support agents respond quickly to help resolve any account error.'}
              </p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Digital Mart BD, I need assistance with a refund/warranty claim')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
            >
              <span>{isBn ? 'হোয়াটসঅ্যাপে ক্লেইম করুন' : 'WhatsApp Support'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

