'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';
import { Button } from '@/components/ui/Button';
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from '@/components/ui/BrandIcons';

export default function ContactPage() {
  const { locale, t } = useLanguage();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact || !message) return;
    setSubmitted(true);
    setName('');
    setContact('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="py-14 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-block text-xs font-bold text-purple-700 uppercase tracking-wider">
            {locale === 'bn' ? 'সাপোর্ট ও যোগাযোগ' : 'Direct Support'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            {locale === 'bn'
              ? 'কোনো প্রশ্ন আছে? আমাদের সাথে কন্টাক্ট করুন'
              : 'Have Questions? Get in Touch with Us'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            {locale === 'bn'
              ? 'সার্ভিস, প্যাকেজ নির্বাচন বা অর্ডার সম্পর্কিত যেকোনো জিজ্ঞাসায় আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।'
              : 'We are here to assist you with digital tool selection, custom packages, and active orders.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Channels (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {locale === 'bn' ? 'যোগাযোগের মাধ্যম' : 'Contact Channels'}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-emerald-800">
                      {locale === 'bn' ? 'হোয়াটসঅ্যাপ (তাৎক্ষণিক রেসপন্স)' : 'WhatsApp (Fastest)'}
                    </div>
                    <div className="font-mono text-sm">{BUSINESS_CONFIG.whatsapp}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-slate-500">
                      {locale === 'bn' ? 'সরাসরি কল' : 'Phone Call'}
                    </div>
                    <div className="font-mono text-sm text-slate-900">{BUSINESS_CONFIG.phoneDisplay}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <Mail className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-slate-500">
                      {locale === 'bn' ? 'ইমেইল সাপোর্ট' : 'Email Helpdesk'}
                    </div>
                    <div className="text-sm text-slate-900">{BUSINESS_CONFIG.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-xs text-slate-500">
                      {locale === 'bn' ? 'কাস্টমার সাপোর্ট সময়' : 'Support Hours'}
                    </div>
                    <div className="text-xs text-slate-900">
                      {locale === 'bn' ? BUSINESS_CONFIG.supportHours_bn : BUSINESS_CONFIG.supportHours_en}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-700 mb-2.5">
                  {locale === 'bn' ? 'অফিশিয়াল সোশ্যাল মিডিয়া:' : 'Official Social Links:'}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={BUSINESS_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#1877F2] hover:text-white text-slate-700 transition-colors shadow-xs"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={BUSINESS_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-700 hover:text-white text-slate-700 transition-colors shadow-xs"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={BUSINESS_CONFIG.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#FF0000] hover:text-white text-slate-700 transition-colors shadow-xs"
                    aria-label="YouTube"
                  >
                    <YouTubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {locale === 'bn' ? 'মেসেজ পাঠান' : 'Send a Message'}
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-base font-bold text-emerald-900">
                    {locale === 'bn' ? 'আপনার মেসেজটি পাঠানো হয়েছে!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    {locale === 'bn'
                      ? 'ধন্যবাদ। আমাদের সাপোর্ট টিম খুব দ্রুত আপনার সাথে যোগাযোগ করবে।'
                      : 'Thank you. Our support team will get back to you shortly.'}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-2"
                  >
                    {locale === 'bn' ? 'আরেকটি মেসেজ পাঠান' : 'Send Another Message'}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {locale === 'bn' ? 'আপনার নাম' : 'Your Name'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={locale === 'bn' ? 'আপনার নাম লিখুন' : 'Enter your name'}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {locale === 'bn' ? 'ফোন বা হোয়াটসঅ্যাপ নম্বর' : 'Phone / WhatsApp'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={locale === 'bn' ? 'যেমন: 01800123456' : 'e.g. 01800123456'}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {locale === 'bn' ? 'বিষয় (ঐচ্ছিক)' : 'Subject (Optional)'}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={locale === 'bn' ? 'যেমন: চ্যাটজিপিটি প্লাস অর্ডার তথ্য' : 'e.g. ChatGPT Plus Inquiry'}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {locale === 'bn' ? 'আপনার মেসেজ' : 'Your Message'} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={locale === 'bn' ? 'কীভাবে সাহায্য করতে পারি বিস্তারিত লিখুন...' : 'Write your question or request...'}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-sm font-bold"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    {locale === 'bn' ? 'মেসেজ পাঠান' : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
