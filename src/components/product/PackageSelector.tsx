'use client';

import React from 'react';
import { ProductPackage } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPrice } from '@/lib/utils';
import { Check, Flame } from 'lucide-react';

interface PackageSelectorProps {
  packages: ProductPackage[];
  selectedPackageId: string;
  onSelect: (pkg: ProductPackage) => void;
}

export function PackageSelector({
  packages,
  selectedPackageId,
  onSelect,
}: PackageSelectorProps) {
  const { locale } = useLanguage();

  return (
    <div className="space-y-3">
      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
        {locale === 'bn' ? 'প্যাকেজ নির্বাচন করুন:' : 'Select Package Tier:'}
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {packages.map((pkg) => {
          const isSelected = pkg.id === selectedPackageId;

          return (
            <div
              key={pkg.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => onSelect(pkg)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onSelect(pkg);
                }
              }}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 relative flex flex-col justify-between ${
                isSelected
                  ? 'border-purple-600 bg-purple-50/40 shadow-sm ring-2 ring-purple-500/20'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
                  <Flame className="w-3 h-3" />
                  <span>{locale === 'bn' ? 'সবচেয়ে পপুলার' : 'Popular Choice'}</span>
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {locale === 'bn' ? pkg.name_bn : pkg.name_en}
                    </h4>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {locale === 'bn' ? `মেয়াদ: ${pkg.duration_bn}` : `Duration: ${pkg.duration_en}`}
                    </span>
                  </div>

                  {/* Radio Indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'border-purple-600 bg-purple-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

                {/* Price Display */}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-xl font-black text-purple-700">
                    {formatPrice(pkg.price, locale)}
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {formatPrice(pkg.originalPrice, locale)}
                    </span>
                  )}
                  {pkg.discountPercent && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {locale === 'bn'
                        ? `${pkg.discountPercent}% ছাড়`
                        : `${pkg.discountPercent}% OFF`}
                    </span>
                  )}
                </div>

                {/* Features Checklist */}
                <ul className="mt-3 space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  {(locale === 'bn' ? pkg.features_bn : pkg.features_en).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
