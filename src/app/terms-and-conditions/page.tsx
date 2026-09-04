'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';
import { 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink,
  Scale
} from 'lucide-react';

export default function TermsPage() {
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
            {isBn ? 'শর্তাবলী' : 'Terms & Conditions'}
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm space-y-10">
          {/* Header */}
          <div className="border-b border-slate-100 pb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-3">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              {isBn ? 'গ্রাহক সেবা চুক্তি' : 'Customer Service Agreement'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {isBn ? 'ব্যবহারের সাধারণ শর্তাবলী (Terms & Conditions)' : 'Terms & Conditions of Service'}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-slate-500">
              {isBn 
                ? 'সর্বশেষ হালনাগাদ: মার্চ ২০২৬ | ডিজিটাল মার্ট বিডি প্ল্যাটফর্মের সকল ক্রয়ের ক্ষেত্রে প্রযোজ্য'
                : 'Last Updated: March 2026 | Applicable to all transactions on Digital Mart BD'}
            </p>
          </div>

          {/* Section 1: Acceptance & Services */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">1</span>
              {isBn ? 'সেবার পরিচিতি ও গ্রহণযোগ্যতা' : 'Scope of Services & Acceptance'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? `ডিজিটাল মার্ট বিডি (${BUSINESS_CONFIG.brandName}) একটি বাংলাদেশি ডিজিটাল প্ল্যাটফর্ম যা বিভিন্ন আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) সফটওয়্যার সাবস্ক্রিপশন সহায়তা, প্রোডাক্টিভিটি টুলস এবং সোশ্যাল মিডিয়া প্রমোশনাল সার্ভিস পরিচালনা করে। এই ওয়েবসাইটে কোনো পণ্য বা সার্ভিস অর্ডার করার মাধ্যমে আপনি এই শর্তাবলীর সাথে সম্পূর্ণরূপে সম্মত হচ্ছেন।`
                  : `Digital Mart BD operates as a Bangladeshi digital concierge facilitating AI software subscriptions, productivity licensing access, and social media digital marketing. By placing an order, browsing, or utilizing any service on this site, you acknowledge and agree to comply with these terms.`}
              </p>
            </div>
          </section>

          {/* Section 2: Intellectual Property & Third-Party Marks */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">2</span>
              {isBn ? 'ব্র্যান্ড সত্ত্ব ও ডিসক্লেইমার' : 'Third-Party Trademarks & Disclaimer'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'OpenAI, Anthropic, Google, Perplexity, Meta (Facebook, Instagram), YouTube, Canva সহ অন্যান্য সকল নাম, ট্রেডমার্ক ও লোগো সংশ্লিষ্ট কোম্পানিগুলোর নিজস্ব মেধাস্বত্ত্ব। ডিজিটাল মার্ট বিডি সংশ্লিষ্ট কোম্পানিগুলোর কোনো অফিসিয়াল প্রতিনিধি নয়; আমরা কেবল আন্তর্জাতিক পেমেন্ট চ্যানেল ও কনসিয়ার্জ ফ্যাসিলিটেশনের মাধ্যমে বাংলাদেশি ফ্রিল্যান্সার ও শিক্ষার্থীদের টুলস ব্যবহারে সহযোগিতা করি।'
                  : 'All third-party brand names, logos, and trademarks (such as OpenAI, Anthropic, Google, Meta, YouTube, Canva, bKash, Nagad) belong solely to their respective copyright and trademark owners. Digital Mart BD acts as an independent digital concierge providing payment accessibility and account assistance for Bangladeshi developers, creators, and students.'}
              </p>
            </div>
          </section>

          {/* Section 3: Account Security & Rules */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">3</span>
              {isBn ? 'অ্যাকাউন্ট ব্যবহার নীতিমালা ও বিধিনিষেধ' : 'Account Usage Guidelines & Restrictions'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {isBn ? 'ক) শেয়ার্ড অ্যাকাউন্ট (Shared Plan) রুলস:' : 'a) Shared Tier Guidelines:'}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>{isBn ? 'পাসওয়ার্ড, ইমেইল বা প্রোফাইল নেম কোনো অবস্থাতেই পরিবর্তন করা যাবে না।' : 'Passwords, master emails, or profile names must never be altered.'}</li>
                  <li>{isBn ? 'একবারে একটি ডিভাইসে লগইন করে ব্যবহার করতে হবে।' : 'Strictly limited to one active session per assigned user slot.'}</li>
                  <li>{isBn ? 'অন্য কারো সাথে অ্যাকাউন্ট ক্রেডেনশিয়াল শেয়ার করা সম্পূর্ণ নিষিদ্ধ।' : 'Redistributing or reselling assigned shared credentials is strictly prohibited.'}</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {isBn ? 'খ) প্রাইভেট অ্যাকাউন্ট (Private Plan) রুলস:' : 'b) Private Tier Guidelines:'}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>{isBn ? 'গ্রাহক তার নিজস্ব ইমেইলে ইনভাইট পাবেন অথবা সম্পূর্ণ নতুন ক্লিন ক্রেডেনশিয়াল পাবেন।' : 'Delivered directly to your personal email inbox or issued as a standalone private credential.'}</li>
                  <li>{isBn ? 'গ্রাহক চাইলে টু-ফ্যাক্টর অথেনটিকেশন (2FA) এবং নিজস্ব পাসওয়ার্ড সেট করতে পারবেন।' : 'Customers may enable two-factor authentication (2FA) and manage personal settings freely.'}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Social Media Growth Rules */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">4</span>
              {isBn ? 'সোশ্যাল মিডিয়া সার্ভিসের শর্তাবলী' : 'Social Media Services Terms'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'সোশ্যাল মিডিয়া সার্ভিসের (ফেসবুক পেজ লাইক, ফলোয়ার, ইনস্টাগ্রাম ও ইউটিউব সার্ভিস) ক্ষেত্রে সংশ্লিষ্ট পেজ বা প্রোফাইল সবসময় পাবলিক (Public) থাকতে হবে। কোনো অবস্থাতেই পাসওয়ার্ড চাওয়া হবে না।'
                  : 'Target pages, profiles, or video links must remain public throughout the delivery window. Under no circumstances does Digital Mart BD ask for account passwords.'}
              </p>
              <p>
                {isBn
                  ? 'কোনো বেআইনি, অবমাননাকর বা সামাজিক নীতিমালা পরিপন্থী কন্টেন্টযুক্ত পেজে সার্ভিস প্রদান করা হবে না। এমন অর্ডার পাওয়া গেলে তা বাতিল করে রিফান্ড করা হবে।'
                  : 'Orders promoting illegal, fraudulent, harmful, or prohibited content will be rejected and canceled in accordance with Bangladeshi cyber safety regulations.'}
              </p>
            </div>
          </section>

          {/* Section 5: Payment Validation & Fraud */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">5</span>
              {isBn ? 'পেমেন্ট ভেরিফিকেশন ও জালিয়াতি প্রতিরোধ' : 'Payment Verification & Fraud Prevention'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'বিকাশ, নগদ, রকেট বা ব্যাংক ট্রান্সফারের মাধ্যমে পাঠানো প্রতিটি অর্ডারের ট্রানজেকশন আইডি (TrxID) আমাদের স্বয়ংক্রিয় ও ম্যানুয়াল অডিট সিস্টেম দ্বারা যাচাই করা হয়। কোনো ভুয়া বা জাল TrxID সাবমিট করলে সংশ্লিষ্ট অর্ডার বাতিল এবং আইপি স্থায়ীভাবে নিষিদ্ধ করা হবে।'
                  : 'All MFS and banking transactions are cross-referenced with statement ledgers. Submission of fraudulent, duplicate, or counterfeit TrxIDs results in instant order termination and blacklisting.'}
              </p>
            </div>
          </section>

          {/* Section 6: Jurisdiction */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">6</span>
              {isBn ? 'আইনগত এখতিয়ার ও নিষ্পত্তি' : 'Governing Law & Dispute Settlement'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'এই শর্তাবলী গণপ্রজাতন্ত্রী বাংলাদেশের প্রচলিত আইন অনুসারে পরিচালিত ও ব্যাখ্যা করা হবে। কোনো অভিযোগ বা মতবিরোধ দেখা দিলে তা আলোচনা ও সৌহার্দ্যপূর্ণ প্রক্রিয়ায় সমাধানের সর্বোচ্চ অগ্রাধিকার দেওয়া হবে।'
                  : 'These terms are governed by and construed in accordance with the laws of the People’s Republic of Bangladesh. Any amicable disputes shall first be mediated in good faith via direct customer resolution channels.'}
              </p>
            </div>
          </section>

          {/* Contact Bar */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                {isBn ? 'শর্তাবলী সম্পর্কে কোনো প্রশ্ন আছে?' : 'Have legal or terms related questions?'}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {isBn 
                  ? `আমাদের অফিসিয়াল সাপোর্ট ইমেইল: ${BUSINESS_CONFIG.email}`
                  : `Contact our legal and support team at ${BUSINESS_CONFIG.email}`}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
            >
              <span>{isBn ? 'যোগাযোগ পেজ' : 'Contact Desk'}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

