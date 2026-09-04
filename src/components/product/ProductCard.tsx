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
} from 'lucide-react';
import { PlatformIcon, ProductPlatformIcon } from '@/components/ui/BrandIcons';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const { addToCart } = useCart();

  // Selected default package is the first or popular package
  const defaultPackage =
    product.packages.find((p) => p.isPopular) || product.packages[0];

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
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-purple-300 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between overflow-hidden relative">
      {/* Top Banner & Platform Header */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* Platform Tag */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700 group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-700 transition-colors">
            <PlatformIcon platform={product.platform} className="w-3.5 h-3.5" />
            <span>{product.platform}</span>
          </div>

          {/* Badge (Featured / Best Seller / Hot) */}
          {product.badge_en && (
            <Badge variant="brand" size="sm">
              {locale === 'bn' ? product.badge_bn || product.badge_en : product.badge_en}
            </Badge>
          )}
        </div>

        {/* Product Title */}
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug line-clamp-1">
            {locale === 'bn' ? product.name_bn : product.name_en}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="mt-1.5 text-xs text-slate-500 leading-relaxed line-clamp-2">
          {locale === 'bn' ? product.short_description_bn : product.short_description_en}
        </p>

        {/* Package Duration & Delivery Info */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
          <span className="font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
            {locale === 'bn' ? defaultPackage.name_bn : defaultPackage.name_en}
          </span>
          <div className="flex items-center gap-1 text-emerald-600 font-medium">
            <Clock className="w-3 h-3" />
            <span>{locale === 'bn' ? product.deliveryTime_bn : product.deliveryTime_en}</span>
          </div>
        </div>
      </div>

      {/* Pricing & CTA Buttons */}
      <div className="p-5 pt-3 bg-slate-50/70 border-t border-slate-100 flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">
              {locale === 'bn' ? 'শুরু মাত্র' : 'Starting from'}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-slate-900">
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
          <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400 font-normal">({product.reviewCount})</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/products/${product.slug}`}
            className="w-full inline-flex items-center justify-center text-xs font-bold py-2 px-3 rounded-lg border border-slate-300 bg-white text-slate-700 hover:border-purple-600 hover:text-purple-700 hover:bg-purple-50/40 transition-all text-center"
          >
            {t.quickView}
          </Link>

          <Button
            variant="primary"
            size="sm"
            onClick={handleQuickOrder}
            className="w-full text-xs"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            {t.orderNow}
          </Button>
        </div>
      </div>
    </div>
  );
}
