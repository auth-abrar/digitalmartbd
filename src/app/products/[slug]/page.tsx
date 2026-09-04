'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { PackageSelector } from '@/components/product/PackageSelector';
import { ProductCard } from '@/components/product/ProductCard';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  Star,
  Info,
  AlertCircle,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import {
  PlatformIcon,
  BkashIcon,
  NagadIcon,
  RocketPaymentIcon,
} from '@/components/ui/BrandIcons';
import { BUSINESS_CONFIG } from '@/config/business';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { locale, t } = useLanguage();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Active selected package
  const [selectedPkg, setSelectedPkg] = useState(
    product.packages.find((p) => p.isPopular) || product.packages[0]
  );
  const [customInput, setCustomInput] = useState('');

  const handleBuyNow = () => {
    addToCart(product, selectedPkg, 1, customInput);
    router.push('/checkout');
  };

  const handleAddToCart = () => {
    addToCart(product, selectedPkg, 1, customInput);
  };

  // Related products in the same category
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-purple-700">
            {t.navHome}
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-purple-700">
            {t.navProducts}
          </Link>
          <span>/</span>
          <span className="font-bold text-slate-800">
            {locale === 'bn' ? product.name_bn : product.name_en}
          </span>
        </nav>

        {/* ─── Main Product Overview & Purchase Section ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Left Column: Product Info & Package Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              {/* Badges & Platform */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 text-slate-800 text-xs font-bold border border-slate-200">
                  <PlatformIcon platform={product.platform} className="w-4 h-4" />
                  <span>{product.platform}</span>
                </div>
                {product.badge_en && (
                  <Badge variant="brand" size="sm">
                    {locale === 'bn' ? product.badge_bn : product.badge_en}
                  </Badge>
                )}
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.inStock}</span>
                </span>
              </div>

              {/* Title & Reviews */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {locale === 'bn' ? product.name_bn : product.name_en}
                </h1>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-amber-500">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-slate-700 font-bold">{product.rating}</span>
                  <span className="text-slate-400 font-normal">
                    ({product.reviewCount} {locale === 'bn' ? 'রিভিউ' : 'reviews'})
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {locale === 'bn' ? product.description_bn : product.description_en}
              </p>

              {/* Notice Prompt */}
              <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200/70 text-xs text-purple-900 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-purple-700 flex-shrink-0 mt-0.5" />
                <span>
                  {locale === 'bn'
                    ? 'প্যাকেজ সিলেক্ট করার আগে ডেলিভারি টাইম, মেয়াদ এবং প্রয়োজনীয় ইনফরমেশন দেখে নিন।'
                    : 'Please review delivery duration, validity, and requirements before placing your order.'}
                </span>
              </div>

              {/* Package Selector */}
              <PackageSelector
                packages={product.packages}
                selectedPackageId={selectedPkg.id}
                onSelect={(pkg) => setSelectedPkg(pkg)}
              />

              {/* Delivery Target / Custom Input */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  {product.category === 'social-media'
                    ? locale === 'bn'
                      ? 'আপনার পেজ বা প্রোফাইলের লিংক:'
                      : 'Target Page or Profile URL:'
                    : locale === 'bn'
                    ? 'আপনার ইমেইল বা হোয়াটসঅ্যাপ নম্বর:'
                    : 'Delivery Email or WhatsApp Number:'}
                </label>
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder={
                    product.category === 'social-media'
                      ? 'https://facebook.com/yourpage'
                      : 'yourname@gmail.com / 01800123456'
                  }
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Summary Box */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-6">
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium">
                    {locale === 'bn' ? 'নির্বাচিত প্যাকেজের প্রাইস' : 'Selected Tier Price'}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-900">
                      {formatPrice(selectedPkg.price, locale)}
                    </span>
                    {selectedPkg.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        {formatPrice(selectedPkg.originalPrice, locale)}
                      </span>
                    )}
                  </div>
                </div>
                {selectedPkg.discountPercent && (
                  <span className="px-2.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-extrabold">
                    {locale === 'bn'
                      ? `${selectedPkg.discountPercent}% সেভ`
                      : `${selectedPkg.discountPercent}% OFF`}
                  </span>
                )}
              </div>

              {/* Delivery and Warranty Highlights */}
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">{t.deliveryTime}:</span>
                  <span className="font-bold text-purple-700 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{locale === 'bn' ? product.deliveryTime_bn : product.deliveryTime_en}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">
                    {locale === 'bn' ? 'মেয়াদ (Validity):' : 'Duration:'}
                  </span>
                  <span className="font-semibold text-slate-800">
                    {locale === 'bn' ? selectedPkg.duration_bn : selectedPkg.duration_en}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">
                    {locale === 'bn' ? 'ওয়ারেন্টি:' : 'Warranty:'}
                  </span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{locale === 'bn' ? 'সম্পূর্ণ মেয়াদে গ্যারান্টি' : 'Full Duration'}</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleBuyNow}
                  className="w-full text-sm font-bold shadow-lg shadow-purple-600/20"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {t.buyNow}
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={handleAddToCart}
                  className="w-full text-xs font-semibold"
                  leftIcon={<ShoppingCart className="w-4 h-4" />}
                >
                  {t.addToCart}
                </Button>
              </div>

              {/* Direct Support & Payment channels */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-center text-xs text-slate-500">
                <div className="font-medium text-slate-700">
                  {locale === 'bn' ? 'সহজ ও নিরাপদ পেমেন্ট মেথড:' : 'Payment Methods:'}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200/60 text-[#E2136E]">
                    <BkashIcon className="w-3.5 h-3.5" />
                    <span>bKash</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200/60 text-[#E31A22]">
                    <NagadIcon className="w-3.5 h-3.5" />
                    <span>Nagad</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-50 border border-purple-200/60 text-[#8C3494]">
                    <RocketPaymentIcon className="w-3.5 h-3.5" />
                    <span>Rocket</span>
                  </span>
                </div>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Digital Mart BD, I want to order ${product.name_en}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{locale === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি প্রশ্ন করুন' : 'Ask on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Structured Tabs / Specifications ─────────────────────────── */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-10 mb-14">
          {/* Section 1: What You Get */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span>{t.whatYouGet}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(locale === 'bn' ? product.whatYouGet_bn : product.whatYouGet_en).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/40 border border-purple-100">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Requirements */}
          <div className="pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              <span>{t.requirements}</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {(locale === 'bn' ? product.requirements_bn : product.requirements_en).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Important Disclaimers */}
          <div className="pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>{t.importantNotes}</span>
            </h2>
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1.5">
              {(locale === 'bn' ? product.importantNotes_bn : product.importantNotes_en).map((item, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">ℹ</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Related Products ─────────────────────────────────────────── */}
        {related.length > 0 && (
          <div className="mb-14">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
              {t.relatedProducts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
