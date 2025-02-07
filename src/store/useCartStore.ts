import { create } from 'zustand';
import { IProduct } from 'interface/products.interface';

interface CartState {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: number) => void;
  updateProductCount: (productId: number, count: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],

  addProduct: (product: IProduct) =>
    set((state: { products: IProduct[] }) => {
      const existingProduct = state.products.find((p) => p.id === product.id);
      if (existingProduct) {
        return {
          products: state.products.map((p) =>
            p.id === product.id ? { ...p, count: p.count + product.count } : p,
          ),
        };
      } else {
        return { products: [...state.products, product] };
      }
    }),

  removeProduct: (productId: number) =>
    set((state: { products: IProduct[] }) => ({
      products: state.products.filter(
        (product: IProduct) => product.id !== productId,
      ),
    })),

  updateProductCount: (productId: number, count: number = 0) =>
    set((state: { products: IProduct[] }) => ({
      products: state.products.map((p) =>
        p.id === productId ? { ...p, count: count ? count : ++p.count } : p,
      ),
    })),

  clearCart: () => set(() => ({ products: [] })),
}));
