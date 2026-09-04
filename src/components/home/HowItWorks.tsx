'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag, FileText, CreditCard, Send } from 'lucide-react';

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ShoppingBag,
      stepNum: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: FileText,
      stepNum: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: CreditCard,
      stepNum: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      iconColor: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
    {
      icon: Send,
      stepNum: '04',
      title: t.step4Title,
      desc: t.step4Desc,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
            Process Overview
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">{t.howItWorksTitle}</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">{t.howItWorksSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-purple-500/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${step.iconColor}`} />
                    </div>
                    <span className="text-2xl font-black text-slate-600 group-hover:text-purple-400 transition-colors">
                      {step.stepNum}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
