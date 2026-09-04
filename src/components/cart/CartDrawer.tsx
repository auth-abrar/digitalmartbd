'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Clock } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalAmount,
    totalItems,
  } = useCart();

  // Lock body scroll and listen for Escape key when cart drawer is open
  React.useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsCartOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slide-in-right">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-purple-600" />
              <h2 className="text-base font-bold text-slate-900">
                {t.cart} ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500 space-y-3">
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="text-base font-bold text-slate-800">{t.emptyCart}</div>
                <p className="text-xs text-slate-500 max-w-xs">
                  {locale === 'bn'
                    ? 'আপনার পছন্দের AI টুলস কিংবা সোশ্যাল মিডিয়া সার্ভিস সিলেক্ট করে সহজেই অর্ডার করুন।'
                    : 'Choose your desired AI tools or social media services to proceed.'}
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setIsCartOpen(false);
                    router.push('/products');
                  }}
                  className="mt-2 font-bold cursor-pointer"
                >
                  {t.startShopping}
                </Button>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {cartItems.map((item) => {
                  const itemPrice = item.selectedPackage.price * item.quantity;
                  return (
                    <div key={`${item.productId}-${item.packageId}`} className="py-4 flex gap-3 group">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between">
                          <h4 className="text-sm font-bold text-slate-900 leading-tight">
                            {locale === 'bn' ? item.product.name_bn : item.product.name_en}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.productId, item.packageId)}
                            className="text-slate-400 hover:text-rose-600 p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="inline-block text-[11px] px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold">
                          {locale === 'bn'
                            ? item.selectedPackage.name_bn
                            : item.selectedPackage.name_en}
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          {/* Quantity control */}
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.packageId, item.quantity - 1)
                              }
                              className="p-1 hover:bg-slate-200 text-slate-600"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 text-xs font-bold text-slate-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.packageId, item.quantity + 1)
                              }
                              className="p-1 hover:bg-slate-200 text-slate-600"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <span className="text-sm font-bold text-purple-700">
                            {formatPrice(itemPrice, locale)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer & Checkout button */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">{t.subtotal}</span>
                <span className="font-bold text-slate-900 text-base">
                  {formatPrice(totalAmount, locale)}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {locale === 'bn'
                    ? 'ইনস্ট্যান্ট ডিজিটাল ডেলিভারি (১৫–৩০ মিনিট)'
                    : 'Instant Digital Delivery (15–30 Mins)'}
                </span>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  setIsCartOpen(false);
                  router.push('/checkout');
                }}
              >
                {t.checkout} ({formatPrice(totalAmount, locale)})
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
