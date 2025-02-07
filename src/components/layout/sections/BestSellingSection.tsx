

import CardContainer from "@componentsUX/Card/CardContainer"
import { IProduct } from "interface/products.interface"


const BestSellingSection = () => {
    const products: IProduct[] = [
        {
            id: 10,
      
            like: false,
            
            img: "BestSellingImg/img1.png",
            title: "The north coat",
            price: 260,
            grade: 5,
            count: 0
        },
        {
            id: 11,

            like: false,
            
            img: "BestSellingImg/img2.png",
            title: "Gucci duffle bag",
            price: 960,
            grade: 4,
            count: 0
        },
        {
            id: 12,

            like: false,
            
            img: "BestSellingImg/img3.png",
            title: "RGB liquid CPU Cooler",
            price: 160,
            grade: 4,
            count: 0
        },
        {
            id: 13,

            like: false,
            
            img: "BestSellingImg/img4.png",
            title: "Small BookSelf",
            price: 375,
            grade: 2,
            count: 0
        },
    ]

    return (
        <section className="flex border-b pt-3 pb-3 border-gray-600 flex-col justify-center items-start gap-5">
            <div className="flex flex-col items-start justify-center gap-5 w-full">
                <div className="flex justify-center items-center gap-3">
                    <div className="bg-red-400 w-[20px] h-[40px] rounded-[5px]" /> 
                    <span className="text-red-400 text-2xl">This Month</span>
                </div>

                <h3 className="text-4xl text-black">
                    Best Selling Products
                </h3>


            </div>

            <div className="flex justify-center items-center gap-5 w-full">
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

export default BestSellingSection