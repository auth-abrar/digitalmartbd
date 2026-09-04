import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'success' | 'warning' | 'info' | 'outline' | 'purple';
  size?: 'sm' | 'md';
}

export function Badge({
  children,
  className,
  variant = 'brand',
  size = 'md',
  ...props
}: BadgeProps) {
  const variantStyles = {
    brand: 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-sm',
    purple: 'bg-purple-50 text-purple-700 border border-purple-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    info: 'bg-sky-50 text-sky-700 border border-sky-200',
    outline: 'bg-transparent text-slate-600 border border-slate-200',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[11px] font-medium rounded',
    md: 'px-2.5 py-1 text-xs font-semibold rounded-md',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
