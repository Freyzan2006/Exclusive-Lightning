

import CardContainer from "@componentsUX/Card/CardContainer"
import { IProduct } from "interface/products.interface"


const OutProductsSection = () => {
    const products: IProduct[] = [
        {
            id: 22,
      
            like: false,
            
            img: "OutProductsImg/img1.png",
            title: "Breed Dry Dog Food",
            price: 100,
            grade: 3,
            count: 0
        },
        {
            id: 23,

            like: false,
            
            img: "OutProductsImg/img2.png",
            title: "CANON EOS DSLR Camera",
            price: 360,
            grade: 4,
            count: 0
        },
        {
            id: 24,

            like: false,
            
            img: "OutProductsImg/img3.png",
            title: "ASUS FHD Gaming Laptop",
            price: 700,
            grade: 5,
            count: 0
        },
        {
            id: 25,

            like: false,
            
            img: "OutProductsImg/img4.png",
            title: "Kids Electric Car",
            price: 960,
            grade: 5,
            count: 0
        },
        {
            id: 26,

            like: false,
            
            img: "OutProductsImg/img5.png",
            title: "Jr. Zoom Soccer Cleats",
            price: 1160,
            grade: 5,
            count: 0
        },
        {
            id: 26,

            like: false,
            
            img: "OutProductsImg/img6.png",
            title: "GP11 Shooter USB Gamepad",
            price: 660,
            grade: 4,
            count: 0
        },
        {
            id: 26,

            like: false,
            
            img: "OutProductsImg/img7.png",
            title: "Quilted Satin Jacket",
            price: 650,
            grade: 2,
            count: 0
        },
        {
            id: 26,

            like: false,
            
            img: "OutProductsImg/img8.png",
            title: "Curology Product Set ",
            price: 500,
            grade: 3,
            count: 0
        },
    ]

    return (
        <section className="flex border-b pt-3 pb-3 border-gray-600 flex-col justify-center items-start gap-5">
            <div className="flex flex-col items-start justify-center gap-5 w-full">
                <div className="flex justify-center items-center gap-3">
                    <div className="bg-red-400 w-[20px] h-[40px] rounded-[5px]" /> 
                    <span className="text-red-400 text-2xl">Our Products</span>
                </div>

                <h3 className="text-4xl text-black">
                    Explore Our Products
                </h3>


            </div>

            <div className="flex justify-center items-center gap-5 w-full flex-wrap">
                {
                    products.map((product) => 
                        <CardContainer key={ product.id } item = { product } />
                    )
                }
            </div>

            <button className = " cursor-pointer self-center hover:scale-105 transition text-white text-md bg-red-400 rounded-lg flex justify-center items-center max-w-[150px] w-full min-h-[50px]">
                View all Products 
            </button>
 
            
        </section>
    )
}

export default OutProductsSection