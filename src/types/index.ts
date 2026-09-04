export type Locale = 'bn' | 'en';

export type ProductCategoryType = 'ai-tools' | 'social-media' | 'digital-services';

export interface Category {
  id: string;
  slug: ProductCategoryType;
  name_en: string;
  name_bn: string;
  description_en: string;
  description_bn: string;
  icon: string;
  badge_en?: string;
  badge_bn?: string;
  itemCount: number;
}

export interface ProductPackage {
  id: string;
  name_en: string;
  name_bn: string;
  duration_en: string;
  duration_bn: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  isPopular?: boolean;
  features_en: string[];
  features_bn: string[];
}

export interface ProductFAQ {
  q_en: string;
  q_bn: string;
  a_en: string;
  a_bn: string;
}

export interface Product {
  id: string;
  slug: string;
  name_en: string;
  name_bn: string;
  short_description_en: string;
  short_description_bn: string;
  description_en: string;
  description_bn: string;
  category: ProductCategoryType;
  platform: string;
  icon: string;
  badge_en?: string;
  badge_bn?: string;
  packages: ProductPackage[];
  basePrice: number;
  deliveryTime_en: string;
  deliveryTime_bn: string;
  requirements_en: string[];
  requirements_bn: string[];
  whatYouGet_en: string[];
  whatYouGet_bn: string[];
  importantNotes_en: string[];
  importantNotes_bn: string[];
  inStock: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  hasOffer: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
  faqs: ProductFAQ[];
  seoTitle_en?: string;
  seoTitle_bn?: string;
  seoDesc_en?: string;
  seoDesc_bn?: string;
}

export interface CartItem {
  productId: string;
  packageId: string;
  product: Product;
  selectedPackage: ProductPackage;
  quantity: number;
  customInput?: string;
}

export type PaymentMethod = 'bkash' | 'nagad' | 'rocket' | 'bank';

export interface Order {
  id: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  deliveryTarget: string;
  items: {
    productId: string;
    productName_en: string;
    productName_bn: string;
    packageId: string;
    packageName_en: string;
    packageName_bn: string;
    price: number;
    quantity: number;
    customInput?: string;
  }[];
  totalAmount: number;
  paymentMethod: PaymentMethod;
  senderNumber: string;
  transactionId: string;
  orderStatus: 'processing' | 'completed' | 'on-hold';
  notes?: string;
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  date_en: string;
  date_bn: string;
  productName_en: string;
  productName_bn: string;
  comment_en: string;
  comment_bn: string;
  verified: boolean;
}
