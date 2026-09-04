'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Zap,
  MousePointerClick,
  BadgePercent,
  Headphones,
  Sliders,
  Wallet,
} from 'lucide-react';

export function TrustSection() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: Zap,
      title: t.trustFastDeliveryTitle,
      desc: t.trustFastDeliveryDesc,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: MousePointerClick,
      title: t.trustEasyOrderTitle,
      desc: t.trustEasyOrderDesc,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: BadgePercent,
      title: t.trustAffordableTitle,
      desc: t.trustAffordableDesc,
      iconColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Headphones,
      title: t.trustLocalSupportTitle,
      desc: t.trustLocalSupportDesc,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Sliders,
      title: t.trustFlexiblePkgTitle,
      desc: t.trustFlexiblePkgDesc,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Wallet,
      title: t.trustEasyPaymentTitle,
      desc: t.trustEasyPaymentDesc,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-card transition-all duration-200 flex items-start gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
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
