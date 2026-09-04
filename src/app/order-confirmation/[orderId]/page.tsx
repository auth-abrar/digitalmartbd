'use client';

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { BUSINESS_CONFIG } from '@/config/business';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Order } from '@/types';
import {
  CheckCircle2,
  Clock,
  MessageCircle,
  Copy,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';

export default function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const resolvedParams = use(params);
  const { locale, t } = useLanguage();
  const [order, setOrder] = useState<Order | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const orders = JSON.parse(localStorage.getItem('digitalmart_orders') || '[]');
      const found = orders.find((o: Order) => o.id === resolvedParams.orderId);
      if (found) {
        setOrder(found);
      }
    } catch (e) {
      console.error(e);
    }
  }, [resolvedParams.orderId]);

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(resolvedParams.orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Digital Mart BD Support! I just placed Order #${resolvedParams.orderId}${
      order ? ` for ${formatPrice(order.totalAmount, 'en')}` : ''
    }. Please confirm and process my delivery.`
  );

  return (
    <div className="py-14 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Success Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl text-center space-y-6">
          {/* Animated Success Check */}
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.orderSuccessTitle}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {t.orderSuccessSubtitle}
            </p>
          </div>

          {/* Order ID Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-mono text-sm sm:text-base font-bold">
            <span>
              {t.orderId}: {resolvedParams.orderId}
            </span>
            <button
              onClick={handleCopyOrderId}
              className="text-purple-600 hover:text-purple-800 p-1"
              title="Copy"
            >
              <Copy className="w-4 h-4" />
            </button>
            {copied && (
              <span className="text-[10px] text-emerald-600 font-sans font-bold">
                {locale === 'bn' ? 'কপি হয়েছে' : 'Copied'}
              </span>
            )}
          </div>

          {/* Primary Action: WhatsApp Confirm for fast delivery */}
          <div className="pt-2">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.confirmWhatsAppBtn}</span>
            </a>
            <span className="text-[11px] text-slate-400 mt-2 block">
              {locale === 'bn'
                ? 'হোয়াটসঅ্যাপে মেসেজ দিলে ডেলিভারি টিম তাৎক্ষণিক কাজ শুরু করতে পারে।'
                : 'Messaging us on WhatsApp allows our fulfillment team to start instantly.'}
            </span>
          </div>

          {/* Order Details Receipt */}
          {order && (
            <div className="pt-6 border-t border-slate-100 text-left space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {locale === 'bn' ? 'অর্ডারের বিবরণ' : 'Order Summary'}
              </h3>

              <div className="bg-slate-50 p-4 rounded-xl space-y-2 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">{locale === 'bn' ? 'গ্রাহক:' : 'Customer:'}</span>
                  <span className="font-bold text-slate-900">{order.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{locale === 'bn' ? 'হোয়াটসঅ্যাপ:' : 'WhatsApp:'}</span>
                  <span className="font-mono">{order.customerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{locale === 'bn' ? 'পেমেন্ট মাধ্যম:' : 'Payment Method:'}</span>
                  <span className="font-bold uppercase text-purple-700">{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{locale === 'bn' ? 'Transaction ID:' : 'TrxID:'}</span>
                  <span className="font-mono font-bold text-slate-900">{order.transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.orderStatus}:</span>
                  <span className="inline-flex items-center gap-1 font-bold text-purple-700">
                    <Clock className="w-3 h-3" />
                    <span>{t.statusProcessing}</span>
                  </span>
                </div>
              </div>

              {/* Items in this order */}
              <div className="divide-y divide-slate-100">
                {order.items.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">
                        {locale === 'bn' ? item.productName_bn : item.productName_en}
                      </div>
                      <div className="text-purple-600 text-[11px]">
                        {locale === 'bn' ? item.packageName_bn : item.packageName_en} × {item.quantity}
                      </div>
                    </div>
                    <span className="font-black text-slate-900">
                      {formatPrice(item.price * item.quantity, locale)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-center text-sm font-bold border-t border-slate-200">
                <span>{t.total}:</span>
                <span className="text-xl font-black text-purple-700">
                  {formatPrice(order.totalAmount, locale)}
                </span>
              </div>
            </div>
          )}

          {/* Secondary Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={`/track-order?id=${resolvedParams.orderId}`}>
              <Button variant="outline" size="md">
                {t.trackOrderBtn}
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="ghost" size="md">
                {t.continueShopping}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
