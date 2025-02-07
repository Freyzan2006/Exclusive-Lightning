import { IProduct } from "interface/products.interface";
import { GrClearOption } from "react-icons/gr";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";


interface IProps {
    items: IProduct[];
    removeProduct: (productId: number) => void;
    updateProductCount: (productId: number, count: number) => void;
    clearCart: () => void;
}

const Cart: React.FC<IProps> = ({ items, removeProduct, updateProductCount, clearCart }) => {
    return (
        <div className=" z-1 absolute max-w-[200px]  flex flex-col flex-wrap  bg-red-400 rounded-2xl p-3">
            <h3 className="text-lg">
                Корзина 
            </h3>
            <div className="flex justify-center items-center ">
                <button className = "w-full flex justify-center items-center text-red-500 cursor-pointer hover:scale-105 transition-transform border border-gray-700 bg-black rounded-2xl" onClick = { clearCart }>
                    <GrClearOption />  
                </button>
            </div>

        <ul className="flex flex-col gap-3 items-center">
            { 
            items.length 
            ?
                items.map((item: IProduct) => (
                    <li key={item.id} className="flex justify-center items-start gap-5 border-2 p-3  rounded-2xl">
                        <div className="flex flex-col justify-center items-start gap-5">
                            <span>
                                { item.title } 
                            </span>
                            <span>
                                { item.count } ш.т
                            </span>
                           
                            { !item.discount || <span>{item.priceDiscounted} $ с скидкой</span> }
                            
                            <span>
                                { item.price } $ цена  
                            </span>
                        </div>
                        <div className="border border-gray-700 bg-black rounded-2xl">
                            <button className = "text-green-400 cursor-pointer hover:scale-105 transition-transform" onClick={ () => updateProductCount(item.id, 0) }>
                                <IoMdAddCircle />
                            </button>
                            <button className = "text-yellow-300 cursor-pointer hover:scale-105 transition-transform" onClick = { () => removeProduct(item.id) }>
                                <MdDelete />
                            </button>
                        </div>

                    </li>
                ))
            : <li className="text-sm">Пусто</li>
            }
        </ul>
        </div> 
        
    )
    
}

export default Cart 