'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  CheckCircle2, 
  Mail, 
  ExternalLink,
  FileCheck
} from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            {isBn ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm space-y-10">
          {/* Header */}
          <div className="border-b border-slate-100 pb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-3">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              {isBn ? 'তথ্য সুরক্ষা ও গোপনীয়তা' : 'Data Privacy & Security Commitment'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {isBn ? 'প্রাইভেসি পলিসি — ডিজিটাল মার্ট বিডি' : 'Privacy Policy — Digital Mart BD'}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-slate-500">
              {isBn 
                ? 'সর্বশেষ হালনাগাদ: মার্চ ২০২৬ | আপনার ব্যক্তিগত তথ্যের সর্বোচ্চ নিরাপত্তা বজায় রাখতে আমরা অঙ্গীকারবদ্ধ'
                : 'Last Updated: March 2026 | Dedicated to uncompromising data protection standards'}
            </p>
          </div>

          {/* Guarantee Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? 'কখনই পাসওয়ার্ড চাওয়া হয় না' : 'Zero Password Solicit'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'আপনার কোনো অ্যাকাউন্ট বা বিকাশ/নগদের পিন নম্বর আমরা চাই না'
                  : 'We strictly never solicit personal passwords or MFS PINs'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? 'তথ্য বিক্রি বা শেয়ারিং নিষিদ্ধ' : 'No Third-Party Sharing'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'কোনো থার্ড পার্টি বিজ্ঞাপনদাতার কাছে তথ্য বিক্রি করা হয় না'
                  : 'We never sell, trade, or monetize your contact information'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isBn ? 'এনক্রিপ্টেড ডাটা ট্রান্সফার' : 'Encrypted Transmission'}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isBn 
                  ? 'সকল ট্রানজেকশন ও অর্ডার তথ্য এনক্রিপ্টেড চ্যানেলে প্রসেস হয়'
                  : 'All checkouts are safeguarded by 256-bit SSL encryption'}
              </p>
            </div>
          </div>

          {/* Section 1: Collected Information */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">1</span>
              {isBn ? 'আমরা কী ধরনের তথ্য সংগ্রহ করি?' : 'Information We Collect'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'ডিজিটাল মার্ট বিডি শুধুমাত্র অর্ডার সম্পন্ন ও ডিজিটাল ডেলিভারি নিশ্চিত করতে প্রয়োজনীয় ন্যূনতম তথ্য সংগ্রহ করে:'
                  : 'We collect only the bare minimum details required to verify your transaction and deliver digital credentials:'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'যোগাযোগের তথ্য:' : 'Contact Identifiers:'}</strong>{' '}
                    {isBn 
                      ? 'গ্রাহকের নাম, সক্রিয় হোয়াটসঅ্যাপ/মোবাইল নম্বর এবং ঐচ্ছিক ইমেইল অ্যাড্রেস।'
                      : 'Customer name, active WhatsApp mobile number, and optional delivery email address.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'পেমেন্ট ট্র্যাকিং তথ্য:' : 'Payment Verification Reference:'}</strong>{' '}
                    {isBn 
                      ? 'পেমেন্ট মাধ্যম (বিকাশ, নগদ, রকেট বা ব্যাংক) এবং প্রদত্ত Transaction ID (TrxID)। আমরা কোনো ক্রেডিট কার্ড নম্বর, ব্যাংক সিভিভি বা ওটিপি/পিন সংগ্রহ করি না।'
                      : 'Selected payment gateway and the alphanumeric Transaction ID (TrxID). We never store credit card numbers, CVVs, or bank/MFS PINs.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isBn ? 'সার্ভিস টার্গেট লিংক:' : 'Service Target URL:'}</strong>{' '}
                    {isBn 
                      ? 'সোশ্যাল মিডিয়া সার্ভিসের ক্ষেত্রে কাস্টমার কর্তৃক প্রদত্ত পাবলিক পেজ বা পোস্টের ইউআরএল।'
                      : 'Public page, post, or channel URL specified for social media fulfillment.'}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: How We Use Information */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">2</span>
              {isBn ? 'তথ্যের ব্যবহার ও গোপনীয়তা রক্ষা' : 'How We Utilize Your Information'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? 'আপনার প্রদত্ত তথ্য কেবল নিচের উদ্দেশ্যে ব্যবহৃত হয়:'
                  : 'Collected information is applied strictly to the following purposes:'}
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600">
                <li>{isBn ? 'অর্ডারের ডিজিটাল অ্যাক্সেস কোড ও লগইন নির্দেশিকা হোয়াটসঅ্যাপ এবং ইমেইলে প্রেরণ।' : 'Delivering software access credentials and instructions via WhatsApp & email.'}</li>
                <li>{isBn ? 'অর্ডার স্ট্যাটাস আপডেট ও ট্র্যাক অর্ডার ভেরিফিকেশন।' : 'Providing real-time order tracking and dispatch notifications.'}</li>
                <li>{isBn ? 'ওয়ারেন্টি ক্লেইম, অ্যাকাউন্ট রিপ্লেসমেন্ট এবং কাস্টমার সাপোর্ট প্রদান।' : 'Validating replacement warranty claims and expediting customer support.'}</li>
                <li>{isBn ? 'জাল বা ভুয়া পেমেন্ট সাবমিশন থেকে প্ল্যাটফর্মকে সুরক্ষিত রাখা।' : 'Shielding the platform from fraudulent or duplicated MFS transactions.'}</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Data Deletion & Customer Rights */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">3</span>
              {isBn ? 'গ্রাহকের অধিকার ও ডাটা মুছে ফেলার অনুরোধ' : 'Customer Rights & Data Erasure'}
            </h2>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                {isBn
                  ? `আপনি যেকোনো সময় আপনার অর্ডার সংক্রান্ত তথ্য ডাটাবেজ থেকে মুছে ফেলার জন্য আমাদের অনুরোধ করতে পারেন। ডেলিভারি সম্পন্ন এবং ওয়ারেন্টির মেয়াদ শেষ হওয়ার পর গ্রাহকের অনুরোধে তথ্য স্থায়ীভাবে মুছে ফেলা হয়।`
                  : `You maintain the right to inspect or request the purging of your contact records from our order ledger once warranty duration has concluded. Simply send a data request to our support desk.`}
              </p>
            </div>
          </section>

          {/* Contact Bar */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                {isBn ? 'প্রাইভেসি বা তথ্য সুরক্ষা সংক্রান্ত প্রশ্ন?' : 'Have privacy or data questions?'}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {isBn 
                  ? `অফিসিয়াল সাপোর্ট টিম: ${BUSINESS_CONFIG.email}`
                  : `Reach our privacy desk directly at ${BUSINESS_CONFIG.email}`}
              </p>
            </div>
            <a
              href={`mailto:${BUSINESS_CONFIG.email}?subject=Privacy%20Inquiry%20Digital%20Mart%20BD`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{isBn ? 'ইমেইল করুন' : 'Email Privacy Desk'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

