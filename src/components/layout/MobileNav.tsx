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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-2 py-1.5 safe-bottom">
      <nav className="flex items-center justify-around">
        {links.map((item, idx) => {
          const Icon = item.icon;
          const isActive = item.href ? pathname === item.href : false;

          if (item.action) {
            return (
              <button
                key={idx}
                onClick={item.action}
                className="flex flex-col items-center justify-center py-1 px-3 text-slate-600 hover:text-purple-700 relative cursor-pointer"
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.badge && (
                    <span className="absolute -top-1.5 -right-2 flex items-center justify-center min-w-[16px] h-4 px-1 text-[10px] font-bold text-white bg-purple-600 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-medium mt-0.5">{item.label}</span>
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
                className="flex flex-col items-center justify-center py-1 px-3 text-emerald-600 hover:text-emerald-700"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[11px] font-medium mt-0.5">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={idx}
              href={item.href!}
              className={`flex flex-col items-center justify-center py-1 px-3 transition-colors ${
                isActive ? 'text-purple-700 font-bold' : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.highlight && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                )}
              </div>
              <span className="text-[11px] mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
