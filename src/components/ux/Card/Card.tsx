import { IProduct } from 'interface/products.interface';

import css from './Card.module.css';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { IoMdStar } from 'react-icons/io';

interface IProps {
  item: IProduct;
  toggleLike: () => void;
  changeGrade: (grade: number) => void;
  addCart: (product: IProduct) => void;
}

const Card: React.FC<IProps> = ({ item, toggleLike, changeGrade, addCart }) => {
  return (
    <div className={css.Card}>
      <div className={css.Card__head}>
        {!item.discount || (
          <span className={css.Card__discount}> {item.discount} %</span>
        )}
        <img className={css.Card__img} src={item.img} alt="img" />

        <button className={css.Card__Like} onClick={toggleLike}>
          {item.like ? <FcLike /> : <FcLikePlaceholder />}
        </button>
        <button onClick={() => addCart(item)} className={css.Card__AddToCart}>
          Add to Cart
        </button>
      </div>
      <div className={css.Card__body}>
        <h3 className="text-black text-2xl">{item.title}</h3>
        <div className="flex justify-center items-center gap-5">
          <span
            className={`${item.discount ? 'text-red-500' : 'text-gray-600'} text-md`}
          >
            {item.price}$
          </span>
          {item.priceDiscounted && (
            <span className=" text-gray-600 line-through">
              {item.priceDiscounted}$
            </span>
          )}
        </div>

        <ul className="flex justify-center items-center gap-1">
          {[...Array(5).keys()].map((_, i) => (
            <li key={i}>
              <button onClick={() => changeGrade(i + 1)}>
                <IoMdStar
                  className={`${i < item.grade ? 'text-yellow-300' : 'text-black'} text-2xl hover:scale-125 transition-transform cursor-pointer`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
