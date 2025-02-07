import { useCartStore } from '@store/useCartStore';
import Cart from './Cart';

const CartContainer: React.FC = () => {
  const { products, removeProduct, updateProductCount, clearCart } =
    useCartStore();

  return (
    <Cart
      items={products}
      removeProduct={removeProduct}
      updateProductCount={updateProductCount}
      clearCart={clearCart}
    />
  );
};

export default CartContainer;
