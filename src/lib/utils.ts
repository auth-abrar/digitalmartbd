import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Locale } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toBanglaDigits(input: string | number): string {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return input
    .toString()
    .replace(/[0-9]/g, (digit) => banglaDigits[parseInt(digit, 10)]);
}

export function formatPrice(amount: number, locale: Locale = 'bn'): string {
  if (locale === 'bn') {
    return `৳${toBanglaDigits(amount)}`;
  }
  return `৳${amount.toLocaleString('en-US')}`;
}
