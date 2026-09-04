'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Clock,
  ArrowRight,
  ShoppingCart,
  Star,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PlatformIcon } from '@/components/ui/BrandIcons';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const { addToCart } = useCart();
  const isBn = locale === 'bn';

  // Selected default package is the first or popular package
  const defaultPackage =
    product.packages.find((p) => p.isPopular) || product.packages[0];

  const discountPercent =
    defaultPackage?.discountPercent ||
    (defaultPackage?.originalPrice
      ? Math.round(
          ((defaultPackage.originalPrice - defaultPackage.price) /
            defaultPackage.originalPrice) *
            100
        )
      : null);

  const handleQuickOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultPackage) {
      addToCart(product, defaultPackage, 1);
      router.push('/checkout');
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultPackage) {
      addToCart(product, defaultPackage, 1);
    }
  };

  return (
    <div className="group relative bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 hover:border-purple-400/80 hover:shadow-[0_16px_36px_-8px_rgba(124,58,237,0.12),0_4px_16px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Accent Gradient Hairline on Hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Top Banner & Platform Header */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* Platform Tag */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-bold text-slate-700 group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-800 transition-colors shadow-2xs">
            <PlatformIcon platform={product.platform} className="w-3.5 h-3.5" />
            <span>{product.platform}</span>
          </div>

          {/* Badge (Featured / Best Seller / Hot) */}
          {product.badge_en ? (
            <Badge variant="brand" size="sm" className="shadow-2xs">
              {isBn ? product.badge_bn || product.badge_en : product.badge_en}
            </Badge>
          ) : discountPercent ? (
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
              {discountPercent}% OFF
            </span>
          ) : null}
        </div>

        {/* Product Title */}
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug line-clamp-1">
            {isBn ? product.name_bn : product.name_en}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="mt-1.5 text-xs text-slate-500 leading-relaxed line-clamp-2 min-h-[32px]">
          {isBn ? product.short_description_bn : product.short_description_en}
        </p>

        {/* Package & Delivery Row */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2.5 border-t border-slate-100">
          <span className="font-semibold text-purple-700 bg-purple-50/80 px-2 py-0.5 rounded-md border border-purple-100/60 truncate max-w-[140px]">
            {isBn ? defaultPackage.name_bn : defaultPackage.name_en}
          </span>
          <div className="flex items-center gap-1 text-emerald-600 font-semibold shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isBn ? product.deliveryTime_bn : product.deliveryTime_en}</span>
          </div>
        </div>
      </div>

      {/* Pricing & CTA Buttons */}
      <div className="p-5 pt-3.5 bg-slate-50/80 border-t border-slate-100 flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[11px] text-slate-400 font-medium">
              {isBn ? 'শুরু মাত্র' : 'Starting from'}
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xl font-black text-slate-900 tracking-tight">
                {formatPrice(defaultPackage.price, locale)}
              </span>
              {defaultPackage.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {formatPrice(defaultPackage.originalPrice, locale)}
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-white px-2 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400 font-normal">({product.reviewCount})</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/products/${product.slug}`}
            className="w-full inline-flex items-center justify-center text-xs font-bold py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50/50 transition-all text-center shadow-2xs"
          >
            {t.quickView}
          </Link>

          <Button
            variant="primary"
            size="sm"
            onClick={handleQuickOrder}
            className="w-full text-xs font-bold shadow-sm shadow-purple-600/20"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            {t.orderNow}
          </Button>
        </div>
      </div>
    </div>
  );
}

