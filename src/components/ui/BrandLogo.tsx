'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function BrandLogo({
  className = '',
  variant = 'dark',
  size = 'md',
  showTagline = true,
}: BrandLogoProps) {
  // Dimensions based on size
  const heightMap = {
    sm: 36,
    md: 44,
    lg: 56,
  };

  const height = heightMap[size] || 44;
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 select-none group transition-opacity duration-150 hover:opacity-95 ${className}`}
      aria-label="Digital Mart BD Home"
    >
      {/* Brand Icon (Circuit Monogram with Purple-Violet-Magenta Gradient) */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={height}
          height={height}
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          <defs>
            <linearGradient id="logo-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4C1D95" />
              <stop offset="35%" stopColor="#7C3AED" />
              <stop offset="75%" stopColor="#C026D3" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="circuit-dot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>

          {/* Rounded Base */}
          <rect x="2" y="2" width="68" height="68" rx="18" fill="url(#logo-icon-grad)" />

          {/* Circuit Trace 1 */}
          <path
            d="M12 24 L24 24 L30 18 L46 18"
            stroke="#FFFFFF"
            strokeOpacity="0.4"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="46" cy="18" r="2.8" fill="#38BDF8" />

          {/* Circuit Trace 2 */}
          <path
            d="M60 48 L48 48 L42 54 L26 54"
            stroke="#FFFFFF"
            strokeOpacity="0.4"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="26" cy="54" r="2.8" fill="#F472B6" />

          {/* Central Stylized 'D' & 'M' Nodes */}
          <path
            d="M23 20 L35 20 C43 20 48 24.5 48 34 C48 43.5 43 48 35 48 L23 48 Z"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M23 20 L23 48" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />

          {/* Digital 'M' bridge */}
          <path
            d="M28 44 L28 29 L35 38 L42 29 L42 44"
            stroke="#FDF4FF"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Circuit node glowing dots */}
          <circle cx="35" cy="38" r="2.2" fill="#F43F5E" />
          <circle cx="35" cy="20" r="2.8" fill="#38BDF8" />
          <circle cx="35" cy="48" r="2.8" fill="#E879F9" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
            } ${isLight ? 'text-white' : 'text-slate-900'}`}
          >
            DIGITAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600">
              MART
            </span>
          </span>
          <span className="px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white shadow-sm">
            BD
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[9.5px] font-semibold tracking-wider uppercase mt-0.5 ${
              isLight ? 'text-purple-200/80' : 'text-slate-500'
            }`}
          >
            Digital Tools & Services
          </span>
        )}
      </div>
    </Link>
  );
}
