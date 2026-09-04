'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { PaymentMethod, Order } from '@/types';
import {
  ShieldCheck,
  CheckCircle,
  Copy,
  Clock,
  ArrowRight,
  ShoppingBag,
  AlertCircle,
  Phone,
} from 'lucide-react';
import {
  BkashIcon,
  NagadIcon,
  RocketPaymentIcon,
  BankPaymentIcon,
} from '@/components/ui/BrandIcons';

export default function CheckoutPage() {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const { cartItems, totalAmount, clearCart } = useCart();

  // Form states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [deliveryTarget, setDeliveryTarget] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bkash');
  const [senderNumber, setSenderNumber] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formError, setFormError] = useState('');

  // Payment details based on selected method
  const currentPaymentInfo = BUSINESS_CONFIG.payments[paymentMethod];

  const handleCopyNumber = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim()) {
      setFormError(locale === 'bn' ? 'অনুগ্রহ করে আপনার নাম লিখুন।' : 'Please enter your full name.');
      return;
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 11) {
      setFormError(
        locale === 'bn'
          ? 'অনুগ্রহ করে একটি সঠিক ১১ ডিজিটের মোবাইল/হোয়াটসঅ্যাপ নম্বর দিন।'
          : 'Please enter a valid phone or WhatsApp number.'
      );
      return;
    }
    if (!senderNumber.trim()) {
      setFormError(
        locale === 'bn'
          ? 'যে নম্বর থেকে টাকা পাঠিয়েছেন সেই প্রেরক নম্বরটি লিখুন।'
          : 'Please provide the sender mobile number.'
      );
      return;
    }
    if (!transactionId.trim()) {
      setFormError(
        locale === 'bn'
          ? 'পেমেন্টের পর পাওয়া Transaction ID (TrxID) টি লিখুন।'
          : 'Please provide the Transaction ID (TrxID).'
      );
      return;
    }

    setIsSubmitting(true);

    // Generate clean Order ID
    const newOrderId = `DMB-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder: Order = {
      id: newOrderId,
      createdAt: new Date().toISOString(),
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: customerEmail.trim(),
      deliveryTarget: deliveryTarget.trim(),
      items: cartItems.map((item) => ({
        productId: item.productId,
        productName_en: item.product.name_en,
        productName_bn: item.product.name_bn,
        packageId: item.packageId,
        packageName_en: item.selectedPackage.name_en,
        packageName_bn: item.selectedPackage.name_bn,
        price: item.selectedPackage.price,
        quantity: item.quantity,
        customInput: item.customInput,
      })),
      totalAmount,
      paymentMethod,
      senderNumber: senderNumber.trim(),
      transactionId: transactionId.trim().toUpperCase(),
      orderStatus: 'processing',
    };

    // Save order in localStorage for tracking
    try {
      const existing = JSON.parse(localStorage.getItem('digitalmart_orders') || '[]');
      existing.unshift(newOrder);
      localStorage.setItem('digitalmart_orders', JSON.stringify(existing));
    } catch (e) {
      console.error('Failed to save order to localStorage', e);
    }

    // Clear cart and redirect
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      router.push(`/order-confirmation/${newOrderId}`);
    }, 600);
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-20 bg-slate-50 min-h-[60vh] flex items-center justify-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center max-w-md mx-auto space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">{t.emptyCart}</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {locale === 'bn'
              ? 'অর্ডার সম্পন্ন করার জন্য অনুগ্রহ করে আপনার পছন্দের প্রোডাক্টটি কার্টে যোগ করুন।'
              : 'Add products to your cart before proceeding to checkout.'}
          </p>
          <Link href="/products" className="inline-block pt-2">
            <Button variant="primary" size="md">
              {t.startShopping}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.checkoutTitle}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            {locale === 'bn'
              ? 'নিচের ইনফরমেশনগুলো পূরণ করে বিকাশ বা নগদে সহজ পেমেন্টের মাধ্যমে অর্ডার সম্পন্ন করুন।'
              : 'Provide your contact and payment details to complete your order.'}
          </p>
        </div>

        {formError && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Form inputs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Customer Information */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {t.customerInfo}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.fullName} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.whatsappNumber} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder={t.whatsappPlaceholder}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-800 font-mono"
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {locale === 'bn' ? 'এই নম্বরে ডেলিভারি পাঠানো হবে' : 'Credentials will be sent here'}
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.emailAddress}
                    </label>
                    <input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.deliveryTarget}
                  </label>
                  <input
                    type="text"
                    value={deliveryTarget}
                    onChange={(e) => setDeliveryTarget(e.target.value)}
                    placeholder={t.deliveryTargetPlaceholder}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {t.paymentMethod}
              </h2>

              {/* Payment Method Selector Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bkash')}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'bkash'
                      ? 'border-[#E2136E] bg-pink-50/60 text-[#E2136E] font-bold shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <BkashIcon className="w-8 h-8" />
                  <span className="text-xs font-bold">bKash</span>
                  <span className="text-[10px] text-pink-700 font-medium">বিকাশ</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('nagad')}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'nagad'
                      ? 'border-[#E31A22] bg-orange-50/60 text-[#E31A22] font-bold shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <NagadIcon className="w-8 h-8" />
                  <span className="text-xs font-bold">Nagad</span>
                  <span className="text-[10px] text-orange-700 font-medium">নগদ</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('rocket')}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'rocket'
                      ? 'border-[#8C3494] bg-purple-50/60 text-[#8C3494] font-bold shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <RocketPaymentIcon className="w-8 h-8" />
                  <span className="text-xs font-bold">Rocket</span>
                  <span className="text-[10px] text-purple-700 font-medium">রকেট</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'bank'
                      ? 'border-slate-900 bg-slate-100 text-slate-900 font-bold shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <BankPaymentIcon className="w-7 h-7 text-slate-700" />
                  <span className="text-xs font-bold">Bank</span>
                  <span className="text-[10px] text-slate-600 font-medium">ব্যাংক</span>
                </button>
              </div>

              {/* Payment Instructions Card */}
              <div className="p-5 rounded-2xl bg-purple-50/40 border border-purple-200/80 space-y-4">
                {paymentMethod !== 'bank' && 'number' in currentPaymentInfo ? (
                  <>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-purple-200">
                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          {paymentMethod.toUpperCase()} {locale === 'bn' ? 'নম্বর (Send Money)' : 'Account Number'}
                        </span>
                        <span className="text-lg sm:text-xl font-black text-purple-900 font-mono">
                          {currentPaymentInfo.number}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopyNumber(currentPaymentInfo.number)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-800 transition-colors self-start sm:self-center"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copied ? (locale === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (locale === 'bn' ? 'কপি করুন' : 'Copy')}</span>
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {locale === 'bn' ? currentPaymentInfo.instruction_bn : currentPaymentInfo.instruction_en}
                    </p>
                  </>
                ) : (
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                    <div className="font-bold text-slate-900 text-sm">
                      {BUSINESS_CONFIG.payments.bank.bankName}
                    </div>
                    <div>
                      Account Name: <span className="font-semibold">{BUSINESS_CONFIG.payments.bank.accountName}</span>
                    </div>
                    <div>
                      Account Number: <span className="font-mono font-bold">{BUSINESS_CONFIG.payments.bank.accountNumber}</span>
                    </div>
                    <div>
                      Branch: <span className="font-semibold">{BUSINESS_CONFIG.payments.bank.branch}</span>
                    </div>
                    <div>
                      Routing: <span className="font-mono">{BUSINESS_CONFIG.payments.bank.routingNumber}</span>
                    </div>
                  </div>
                )}

                {/* Verification Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-purple-200/60">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.senderNumber} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={senderNumber}
                      onChange={(e) => setSenderNumber(e.target.value)}
                      placeholder={t.senderNumberPlaceholder}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.transactionId} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      placeholder={t.transactionIdPlaceholder}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-800 font-mono uppercase"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Place Order Button */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {t.orderSummary}
              </h2>

              {/* Items List */}
              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.packageId}`} className="py-3 flex items-start justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-slate-900">
                        {locale === 'bn' ? item.product.name_bn : item.product.name_en}
                      </div>
                      <div className="text-purple-700 font-semibold mt-0.5">
                        {locale === 'bn' ? item.selectedPackage.name_bn : item.selectedPackage.name_en} × {item.quantity}
                      </div>
                    </div>
                    <span className="font-black text-slate-900 text-sm">
                      {formatPrice(item.selectedPackage.price * item.quantity, locale)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total & Delivery note */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{t.total}:</span>
                  <span className="text-2xl font-black text-purple-700">
                    {formatPrice(totalAmount, locale)}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    {locale === 'bn'
                      ? 'পেমেন্টের পর ১৫–৩০ মিনিটে সরাসরি ডিজিটাল ডেলিভারি'
                      : 'Instant delivery within 15–30 minutes after payment'}
                  </span>
                </div>
              </div>

              {/* Place Order CTA */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full text-sm font-bold shadow-lg shadow-purple-600/20"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                {t.confirmOrder}
              </Button>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                {t.termsAgreement}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
