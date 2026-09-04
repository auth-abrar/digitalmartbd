'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid, Tag, ShoppingBag, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { BUSINESS_CONFIG } from '@/config/business';

export function MobileNav() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();

  const links = [
    {
      href: '/',
      label: locale === 'bn' ? 'হোম' : 'Home',
      icon: Home,
    },
    {
      href: '/products',
      label: locale === 'bn' ? 'প্রোডাক্ট' : 'Products',
      icon: Grid,
    },
    {
      href: '/offers',
      label: locale === 'bn' ? 'অফার' : 'Offers',
      icon: Tag,
      highlight: true,
    },
    {
      action: () => setIsCartOpen(true),
      label: locale === 'bn' ? 'কার্ট' : 'Cart',
      icon: ShoppingBag,
      badge: totalItems > 0 ? totalItems : null,
    },
    {
      href: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`,
      isExternal: true,
      label: locale === 'bn' ? 'সাপোর্ট' : 'Support',
      icon: MessageCircle,
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.07)] px-2 pt-1.5 pb-[calc(env(safe-area-inset-bottom,0px)+0.4rem)]">
      <nav className="flex items-center justify-around max-w-md mx-auto">
        {links.map((item, idx) => {
          const Icon = item.icon;
          const isActive = item.href ? pathname === item.href : false;

          if (item.action) {
            return (
              <button
                key={idx}
                onClick={item.action}
                className="flex flex-col items-center justify-center py-1 px-3 text-slate-600 hover:text-purple-700 active:scale-90 transition-all relative cursor-pointer min-w-[56px]"
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.badge && (
                    <span className="absolute -top-1.5 -right-2.5 flex items-center justify-center min-w-[17px] h-[17px] px-1 text-[10px] font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10.5px] font-semibold mt-0.5">{item.label}</span>
              </button>
            );
          }

          if (item.isExternal) {
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-1 px-3 text-emerald-600 hover:text-emerald-700 active:scale-90 transition-all min-w-[56px]"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10.5px] font-bold mt-0.5">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={idx}
              href={item.href!}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all active:scale-90 min-w-[56px] ${
                isActive
                  ? 'text-purple-700 font-bold bg-purple-50/90'
                  : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.highlight && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                )}
              </div>
              <span className="text-[10.5px] mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
