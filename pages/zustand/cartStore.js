import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(persist((set) => ({
  cartItems: [],
  addToCart: (image) => {
    set((state) => ({ cartItems: [...state.cartItems, image] }));
  },
  removeFromCart: (id) => {
    set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) }));
  },
}), {
  name: 'cart-storage',
}));
export default useCartStore;