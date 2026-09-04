'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ProductPackage } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, selectedPackage: ProductPackage, quantity?: number, customInput?: string) => void;
  removeFromCart: (productId: string, packageId: string) => void;
  updateQuantity: (productId: string, packageId: string, quantity: number) => void;
  clearCart: () => void;
  totalAmount: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('digitalmart_cart');
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('digitalmart_cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product: Product, selectedPackage: ProductPackage, quantity = 1, customInput = '') => {
    setCartItems((prev) => {
      const index = prev.findIndex(
        (item) => item.productId === product.id && item.packageId === selectedPackage.id
      );
      if (index > -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + quantity,
          customInput: customInput || updated[index].customInput,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            productId: product.id,
            packageId: selectedPackage.id,
            product,
            selectedPackage,
            quantity,
            customInput,
          },
        ];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, packageId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.packageId === packageId))
    );
  };

  const updateQuantity = (productId: string, packageId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, packageId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.packageId === packageId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.selectedPackage.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalAmount,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
