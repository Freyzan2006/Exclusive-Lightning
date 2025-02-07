export interface IProduct {
  id: number;
  discount?: number;
  priceDiscounted?: number;
  like: boolean;

  img: string;
  title: string;
  price: number;
  grade: number;
  count: number;
}
