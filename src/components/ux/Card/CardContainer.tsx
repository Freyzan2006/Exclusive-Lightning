import { IProduct } from 'interface/products.interface';
import Card from './Card';
import { useEffect, useState } from 'react';
import { calculateDiscountedPrice } from '@utils/calculateDiscountedPrice';
import { useCartStore } from '@store/useCartStore';

interface IProps {
  item: IProduct;
}

const CardContainer: React.FC<IProps> = ({ item }) => {
  const [data, setData] = useState<IProduct>(item);

  const { addProduct } = useCartStore();

  const toggleLike = () => setData({ ...data, like: !data.like });
  const changeGrade = (grade: number) => setData({ ...data, grade: grade });
  const addCart = () => addProduct({ ...data, count: 1 });

  useEffect(() => {
    if (data.discount)
      setData({
        ...data,
        priceDiscounted: calculateDiscountedPrice(data.price, data.discount),
      });
  }, []);

  return (
    <Card
      item={data}
      toggleLike={toggleLike}
      changeGrade={changeGrade}
      addCart={addCart}
    />
  );
};

export default CardContainer;
