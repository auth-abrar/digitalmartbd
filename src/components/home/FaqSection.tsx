'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q_en: string;
  q_bn: string;
  a_en: string;
  a_bn: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    q_en: 'How do I place an order on Digital Mart BD?',
    q_bn: 'ডিজিটাল মার্ট বিডি থেকে কীভাবে অর্ডার করব?',
    a_en: 'Browse our catalog, select your preferred product and package tier, and click "Order Now" or "Add to Cart". On the checkout page, provide your contact details and complete payment via bKash, Nagad, Rocket, or Bank Transfer.',
    a_bn: 'আমাদের ওয়েবসাইট থেকে আপনার পছন্দের প্রোডাক্ট ও প্যাকেজটি বেছে নিয়ে "অর্ডার করুন" বাটনে ক্লিক করুন। এরপর চেকআউট পেজে আপনার নাম, হোয়াটসঅ্যাপ নম্বর এবং বিকাশ/নগদ পেমেন্টের ট্রানজেকশন আইডি (TrxID) দিয়ে অর্ডার কনফার্ম করুন।',
  },
  {
    q_en: 'How do I make a payment using bKash or Nagad?',
    q_bn: 'বিকাশ বা নগদ দিয়ে পেমেন্ট কীভাবে করব?',
    a_en: 'During checkout, our official bKash/Nagad number is displayed. Send Money using your mobile app or USSD menu. Once sent, copy the Transaction ID (TrxID) and enter it along with your sending phone number in the checkout form.',
    a_bn: 'চেকআউট পেজে আমাদের অফিশিয়াল বিকাশ ও নগদ নম্বর দেওয়া রয়েছে। অ্যাপ অথবা ডায়াল কোড দিয়ে "Send Money" করুন। টাকা পাঠানো সফল হলে প্রাপ্ত Transaction ID (TrxID) এবং আপনার ফোন নম্বরটি চেকআউট ফর্মে লিখে সাবমিট করুন।',
  },
  {
    q_en: 'How long does delivery take after payment?',
    q_bn: 'পেমেন্ট করার পর ডেলিভারি কতক্ষণে পাব?',
    a_en: 'Most digital tools (ChatGPT, Claude, Canva, VPN) are delivered within 15 to 30 minutes. Social media services start within 1 to 6 hours depending on package size.',
    a_bn: 'চ্যাটজিপিটি, ক্লড, ক্যানভা বা ভিপিএন-এর মতো ডিজিটাল সাবস্ক্রিপশন সাধারণত পেমেন্ট কনফার্ম হওয়ার ১৫ থেকে ৩০ মিনিটের মধ্যে ডেলিভারি দেওয়া হয়। সোশ্যাল মিডিয়া সার্ভিসের কাজ ১ থেকে ৬ ঘণ্টার মধ্যে শুরু হয়।',
  },
  {
    q_en: 'What happens immediately after placing an order?',
    q_bn: 'অর্ডার প্লেস করার পর কী হবে?',
    a_en: 'You will receive an instant Order ID on your screen. You can also click the WhatsApp confirmation button to notify our support team directly for expedited processing.',
    a_bn: 'অর্ডার সম্পন্ন করার সাথে সাথে আপনার স্ক্রিনে একটি ইউনিক অর্ডার নম্বর (Order ID) দেখতে পাবেন। এছাড়া দ্রুত ডেলিভারির জন্য সরাসরি স্ক্রিনের "হোয়াটসঅ্যাপে কনফার্ম করুন" বাটনে ক্লিক করে আমাদের জানাতে পারবেন।',
  },
  {
    q_en: 'How do I receive the product credentials or service?',
    q_bn: 'প্রোডাক্ট কীভাবে ডেলিভারি পাব?',
    a_en: 'For accounts & subscriptions, we send login details or invitation links straight to your provided WhatsApp or Email. For social media services, delivery is applied directly to the submitted link.',
    a_bn: 'সাবস্ক্রিপশনের ক্ষেত্রে আপনার প্রদান করা হোয়াটসঅ্যাপ নম্বর বা ইমেইলে সরাসরি লগইন ডিটেইলস বা ইনভাইট লিংক পাঠানো হবে। আর সোশ্যাল মিডিয়া সার্ভিসের ক্ষেত্রে সরাসরি আপনার দেওয়া লিংকে কাজ সম্পন্ন হবে।',
  },
  {
    q_en: 'What should I do if I face any issue or account disruption?',
    q_bn: 'কোনো সমস্যা হলে কী করব?',
    a_en: 'Our dedicated customer support is active every day from 10:00 AM to 11:00 PM on WhatsApp (+880 1800-123456). Message us with your Order ID, and our team will resolve it promptly.',
    a_bn: 'যেকোনো সমস্যায় আমাদের হোয়াটসঅ্যাপ নম্বরে আপনার অর্ডার আইডি দিয়ে মেসেজ দিন। আমাদের টিম প্রতিদিন সকাল ১০টা থেকে রাত ১১টা পর্যন্ত সরাসরি সাপোর্টে নিয়োজিত থাকে।',
  },
  {
    q_en: 'What is your warranty and refund policy?',
    q_bn: 'রিফান্ড ও ওয়ারেন্টি পলিসি কী?',
    a_en: 'All verified subscriptions include a full-duration replacement warranty. If a delivered service cannot be fulfilled due to technical issues, a full refund or credit is issued.',
    a_bn: 'আমাদের প্রতিটি প্যাকেজে মেয়াদের পুরো সময় রিপ্লেসমেন্ট ওয়ারেন্টি থাকে। যদি কোনো টেকনিক্যাল কারণে কোনো প্রোডাক্ট সরবরাহ করা সম্ভব না হয়, তবে সম্পূর্ণ টাকা রিফান্ড প্রদান করা হয়।',
  },
  {
    q_en: 'How do shared vs. private AI subscriptions work?',
    q_bn: 'AI সাবস্ক্রিপশনে শেয়ার্ড এবং প্রাইভেট প্যাকেজের পার্থক্য কী?',
    a_en: 'Shared packages offer budget-friendly access to premium features (GPT-4o, Claude 3.5 Sonnet) at a fraction of the cost. Private packages are upgraded directly on your personal email for 100% private chats.',
    a_bn: 'শেয়ার্ড প্যাকেজ হলো অত্যন্ত সাশ্রয়ী মূল্যে প্রিমিয়াম AI ফিচারের সুবিধা নেওয়া। আর প্রাইভেট প্যাকেজে সম্পূর্ণ আপনার নিজস্ব ব্যক্তিগত ইমেইলে সাবস্ক্রিপশনটি চালু করে দেওয়া হয়, যেখানে আপনার চ্যাট হিস্ট্রি সম্পূর্ণ গোপন থাকে।',
  },
  {
    q_en: 'Do you require passwords for social media growth services?',
    q_bn: 'সোশ্যাল মিডিয়া সার্ভিসের জন্য কি পাসওয়ার্ড দিতে হবে?',
    a_en: 'Never. We only require your public page link, video URL, or profile username. We will never ask for your passwords.',
    a_bn: 'একদমই না! সোশ্যাল মিডিয়া সার্ভিসের জন্য কোনো ধরনের পাসওয়ার্ড প্রয়োজন নেই। শুধুমাত্র আপনার পেজ, ভিডিও বা প্রোফাইলের পাবলিক লিংক দিলেই কাজ হবে।',
  },
];

export function FaqSection() {
  const { locale, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 uppercase tracking-wider mb-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{locale === 'bn' ? 'কাস্টমার গাইড' : 'Customer FAQ'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.faqTitle}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {MAIN_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-purple-50/30 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {locale === 'bn' ? faq.q_bn : faq.q_en}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 pt-3">
                    {locale === 'bn' ? faq.a_bn : faq.a_en}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
