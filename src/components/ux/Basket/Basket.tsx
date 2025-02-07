import { useState } from "react";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import CartContainer from "../Cart/CartContainer";


const Basket: React.FC = () => {
    const [isOpenBasket, setIsOpenBasket] = useState<boolean>(false);

    return (
        <div className = 'flex justify-center items-center'>
        <button
          className="text-black cursor-pointer text-2xl"
          onClick={() => setIsOpenBasket((priv) => !priv)}
        >
          {isOpenBasket ? (
            <SlBasketLoaded className="text-red-500" />
          ) : (
            <SlBasket />
          )}
        </button>

        <div className=" fixed top-5 left-5 ">{isOpenBasket && <CartContainer />}</div>
      </div>
    )
}

export default Basket