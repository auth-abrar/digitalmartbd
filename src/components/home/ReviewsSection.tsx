'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { REVIEWS } from '@/data/reviews';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';

export function ReviewsSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold text-purple-700 uppercase tracking-wider mb-1.5">
            {locale === 'bn' ? 'কাস্টমার মতামত' : 'Customer Feedback'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.reviewsTitle}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            {t.reviewsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card flex flex-col justify-between hover:border-purple-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {locale === 'bn' ? rev.date_bn : rev.date_en}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{locale === 'bn' ? rev.comment_bn : rev.comment_en}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{rev.authorName}</div>
                  <div className="text-purple-700 font-medium text-[11px]">
                    {locale === 'bn' ? rev.productName_bn : rev.productName_en}
                  </div>
                </div>
                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3" />
                    <span>{locale === 'bn' ? 'অর্ডার সম্পন্ন' : 'Order Done'}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
