'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';
import { 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Mail, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function DeliveryPolicyPage() {
  const { locale, t } = useLanguage();

  const isBn = locale === 'bn';

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-purple-700 transition-colors">
            {t.navHome}
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">
            {isBn ? 'ডেলিভারি পলিসি' : 'Delivery Policy'}
          </span>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm space-y-10">
          {/* Header Section */}
          <div className="border-b border-slate-100 pb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100 mb-3">
              <Clock className="w-3.5 h-3.5 text-purple-600" />
              {isBn ? 'ডিজিটাল ফুলফিলমেন্ট গাইডলাইন' : 'Digital Fulfillment Guidelines'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {isBn ? 'ডিজিটাল প্রোডাক্ট ডেলিভারি পলিসি' : 'Digital Product Delivery Policy'}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-slate-500">
              {isBn 
                ? 'সর্বশেষ হালনাগাদ: মার্চ ২০২৬ | ডিজিটাল মার্ট বিডি অফিসিয়াল পলিসি'
                : 'Last Updated: March 2026 | Digital Mart BD Official Guidelines'}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? 'ডেলিভারি চ্যানেল' : 'Delivery Method'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'সরাসরি হোয়াটসঅ্যাপ ও ইমেইলে ক্রেডেনশিয়াল পাঠানো হয়'
                  : 'Delivered directly to WhatsApp and your provided email'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? 'ডেলিভারি সময়সীমা' : 'Turnaround Time'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'AI টুলস ১৫-৩০ মিনিট, সোশ্যাল গ্রোথ ৬-২৪ ঘণ্টা'
                  : 'AI Tools 15–30 mins, Social Growth 6–24 hours'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? 'পাসওয়ার্ড মুক্ত সার্ভিস' : 'Zero Password Policy'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'আপনার কোনো পার্সোনাল পাসওয়ার্ড কখনই চাওয়া হবে না'
                  : 'We will never ask for your personal account passwords'}
              </p>
            </div>
          </div>

          {/* Section 1: Fulfillment Process */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">1</span>
              {isBn ? '১০০% ডিজিটাল ডেলিভারি প্রক্রিয়া' : '100% Digital Delivery Mechanism'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'ডিজিটাল মার্ট বিডি (Digital Mart BD) একটি পূর্ণাঙ্গ ডিজিটাল সেবা প্রদানকারী প্রতিষ্ঠান। আমাদের প্ল্যাটফর্মে বিক্রয়কৃত কোনো প্রোডাক্টের ক্ষেত্রে ফিজিক্যাল পার্সেল, কুরিয়ার কিংবা কাগজের ভাউচার প্রেরণ করা হয় না।'
                  : 'Digital Mart BD operates exclusively as a digital services provider. No physical parcels, physical coupons, or courier shipments are dispatched for any items listed on our platform.'}
              </p>
              <p>
                {isBn
                  ? 'চেকআউটের সময় গ্রাহক কর্তৃক প্রদত্ত হোয়াটসঅ্যাপ নম্বর এবং ইমেইল অ্যাড্রেসে অর্ডারের বিস্তারিত, লগইন অ্যাক্সেস লিংক ও কনফার্মেশন কোড ডিজিটাল উপায়ে সুরক্ষিতভাবে প্রেরণ করা হয়।'
                  : 'Access credentials, activation invites, and confirmation receipts are securely transmitted to the WhatsApp number and email address supplied during checkout.'}
              </p>
            </div>
          </section>

          {/* Section 2: Timeframes by Category */}
          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">2</span>
              {isBn ? 'ক্যাটাগরি অনুযায়ী ডেলিভারি সময়সীমা' : 'Category Turnaround Schedule'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>{isBn ? 'AI সফটওয়্যার ও প্রিমিয়াম টুলস' : 'AI Software & Premium Tools'}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold">১৫–৩০ মিনিট</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  {isBn
                    ? 'ChatGPT Plus, Claude Pro, Gemini Advanced, Perplexity, Canva Pro ইত্যাদি অর্ডারের ক্ষেত্রে পেমেন্ট ভেরিফিকেশনের ১৫ থেকে ৩০ মিনিটের মধ্যে ডেলিভারি সম্পন্ন হয়।'
                    : 'ChatGPT Plus, Claude Pro, Gemini, Perplexity, and Canva Pro are fulfilled within 15–30 minutes following payment confirmation.'}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>{isBn ? 'সোশ্যাল মিডিয়া ক্যাম্পেইন ও গ্রোথ' : 'Social Media Growth Services'}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">৬–২৪ ঘণ্টা</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  {isBn
                    ? 'ফেসবুক লাইক/ফলোয়ার, ইনস্টাগ্রাম ও ইউটিউব সার্ভিসের ক্ষেত্রে অর্ডার নিশ্চিতকরণের ১-২ ঘণ্টার মধ্যে কাজ শুরু হয় এবং সাধারণত ৬ থেকে ২৪ ঘণ্টার মধ্যে সমাপ্ত হয়।'
                    : 'Facebook, Instagram, and YouTube growth orders commence within 1–2 hours and generally complete within 6–24 hours depending on quantity.'}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Operating Hours */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">3</span>
              {isBn ? 'অপারেশনাল সময় ও সাপোর্ট সূচি' : 'Operational & Fulfillment Hours'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? `আমাদের অর্ডার ভেরিফিকেশন ও ডেলিভারি টিম প্রতিদিন সকাল ১০:০০ টা থেকে রাত ১১:০০ টা পর্যন্ত সক্রিয় থাকে। এই সময়ের মধ্যে প্লেস করা অর্ডারগুলো দ্রুততম সময়ে ডেলিভারি করা হয়।`
                  : `Our operational verification team is active daily from 10:00 AM to 11:00 PM BST. Orders placed within operational hours are prioritized for immediate fulfillment.`}
              </p>
              <p>
                {isBn
                  ? 'রাত ১১:০০ টার পর প্লেস করা অর্ডারগুলো পরবর্তী দিন সকাল ১০:০০ টায় সার্ভিস চালু হওয়ার সাথে সাথে ক্রমানুসারে প্রসেস করা হবে।'
                  : 'Orders placed past 11:00 PM BST are queued and fulfilled sequentially starting from 10:00 AM BST the following morning.'}
              </p>
            </div>
          </section>

          {/* Section 4: Customer Obligations */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">4</span>
              {isBn ? 'গ্রাহকের দায়িত্ব ও করণীয়' : 'Customer Responsibilities'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'সঠিক হোয়াটসঅ্যাপ নম্বর প্রদান:' : 'Accurate WhatsApp Contact:'}</strong>{' '}
                    {isBn 
                      ? 'অর্ডার ফর্মে সঠিক ও সচল হোয়াটসঅ্যাপ নম্বর প্রদান নিশ্চিত করুন যাতে লগইন ক্রেডেনশিয়াল পৌঁছাতে বিঘ্ন না ঘটে।'
                      : 'Ensure an active WhatsApp number with country code is entered so credentials can be delivered without delay.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'সঠিক ট্রানজেকশন আইডি (TrxID):' : 'Accurate Transaction Reference:'}</strong>{' '}
                    {isBn 
                      ? 'বিকাশ, নগদ বা রকেটে টাকা পাঠানোর পর প্রাপ্ত সঠিক Transaction ID ইনপুট করুন। ভুল TrxID দিলে ম্যানুয়াল অডিটে বিলম্ব হতে পারে।'
                      : 'Input the exact 8-10 character TrxID returned by bKash, Nagad, or Rocket to prevent automated validation holds.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'পাবলিক প্রোফাইল লিংক:' : 'Public Target URL:'}</strong>{' '}
                    {isBn 
                      ? 'সোশ্যাল মিডিয়া সার্ভিসের ক্ষেত্রে সংশ্লিষ্ট পেজ বা প্রোফাইল অবশ্যই পাবলিক থাকতে হবে। প্রাইভেট অ্যাকাউন্টে কাজ করা সম্ভব নয়।'
                      : 'Ensure social profiles or target posts remain public throughout the delivery period.'}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Tracking & Support Hotline */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                {isBn ? 'অর্ডারের অবস্থা জানতে চান?' : 'Need to check on your delivery status?'}
              </h3>
              <p className="text-xs text-slate-600">
                {isBn 
                  ? 'আপনার অর্ডার আইডি এবং মোবাইল নম্বর দিয়ে তাৎক্ষণিক লাইভ স্ট্যাটাস দেখুন।'
                  : 'Track your pending fulfillment in real-time or reach out to our team directly.'}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/track-order"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <span>{isBn ? 'অর্ডার ট্র্যাক করুন' : 'Track Order'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Digital Mart BD Support, I have a delivery inquiry')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold shadow-sm transition-colors"
              >
                <span>{isBn ? 'হোয়াটসঅ্যাপ হেল্পলাইন' : 'WhatsApp Support'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

