import Timer from '@components/ui/Timer';
import CardContainer from '@componentsUX/Card/CardContainer';
import { IProduct } from 'interface/products.interface';

const FlashSalesSection = () => {
  const products: IProduct[] = [
    {
      id: 1,
      discount: 0,
      like: false,

      img: 'Products/img1.png',
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      grade: 0,
      count: 0,
    },
    {
      id: 2,
      discount: 35,
      like: false,

      img: 'Products/img2.png',
      title: 'AK-900 Wired Keyboard',
      price: 960,
      grade: 4,
      count: 0,
    },
    {
      id: 3,
      discount: 30,
      like: false,

      img: 'Products/img3.png',
      title: 'IPS LCD Gaming Monitor',
      price: 370,
      grade: 3,
      count: 0,
    },
    {
      id: 4,
      discount: 25,
      like: false,

      img: 'Products/img4.png',
      title: 'S-Series Comfort Chair ',
      price: 375,
      grade: 3,
      count: 0,
    },
  ];

  return (
    <section className="flex border-b pt-3 pb-3 border-gray-600 flex-col justify-center items-start gap-5">
      <div className="flex flex-col items-start justify-center gap-5 w-full">
        <div className="flex justify-center items-center gap-3">
          <div className="bg-red-400 w-[20px] h-[40px] rounded-[5px]" />
          <span className="text-red-400 text-2xl">Today’s</span>
        </div>

        <div className=" flex w-full  justify-between items-center flex-wrap">
          <h3 className="text-4xl text-black">Flash Sales</h3>
          <Timer />
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        {products.map((product) => (
          <CardContainer key={product.id} item={product} />
        ))}
      </div>

      <button className=" cursor-pointer self-center hover:scale-105 transition text-white text-md bg-red-400 rounded-lg flex justify-center items-center max-w-[150px] w-full min-h-[50px]">
        View all Products
      </button>
    </section>
  );
};

export default FlashSalesSection;
