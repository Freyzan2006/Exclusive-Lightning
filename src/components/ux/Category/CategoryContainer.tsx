import { FaCamera, FaHeadphones, FaKeyboard, FaMobile, FaMouse } from "react-icons/fa"
import Category from "./Category"
import { RiComputerFill } from "react-icons/ri"
import { BsSmartwatch } from "react-icons/bs"
import { SiYoutubegaming } from "react-icons/si"
import { ICategory } from "interface/category.interface"
import { useState } from "react"
import { chunkArray } from "@utils/chunkArray"
import { VscVr } from "react-icons/vsc"
import { CiBatteryFull } from "react-icons/ci"


import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"


const CategoryContainer: React.FC = () => {
    const categories: ICategory[] = [
        {
            id: 1,
            icon: <FaMobile />,
            title: "Phones"
        },
        {
            id: 2,
            icon: <RiComputerFill />,
            title: "Computers"
        },
        {
            id: 3,
            icon: <BsSmartwatch />,
            title: "SmartWatch"
        },
        {
            id: 4,
            icon:  <FaCamera />,
            title: "Camera"
        },
        {
            id: 5,
            icon:  <FaHeadphones />,
            title: "HeadPhones"
        },
        {
            id: 6,
            icon:  <SiYoutubegaming />,
            title: "Gaming"
        },

        {
            id: 7,
            icon: <VscVr />,
            title: "VR"
        },
        {
            id: 8,
            icon: <CiBatteryFull />,
            title: "Chargers"
        },
        {
            id: 9,
            icon: <FaMouse />,
            title: "Mouse"
        },
        {
            id: 10,
            icon:  <FaCamera />,
            title: "Camera"
        },
        {
            id: 11,
            icon:  <FaKeyboard />,
            title: "Keyboard"
        },
        {
            id: 12,
            icon:  <SiYoutubegaming />,
            title: "Gaming"
        },
    ]

   
    const chunkedCategories = chunkArray(categories, 6);

    const [currentCategory, setCurrentCategory] = useState<number>(0);  
    const [currentChunk, setCurrentChunk] = useState<number>(0); 
    const [animationKey, setAnimationKey] = useState<number>(0);

    const nextChunk = () => {
        if (currentChunk < chunkedCategories.length - 1) {
            setCurrentChunk(currentChunk + 1);
            setAnimationKey((prev) => prev + 1);
        }
    };

    const prevChunk = () => {
        if (currentChunk > 0) {
            setCurrentChunk(currentChunk - 1);
            setAnimationKey((prev) => prev + 1);
        }
    };





    return (
        <div className="overflow-hidden flex flex-col gap-5 w-full p-5">
            <div className="flex justify-center items-center gap-5 self-end">
                <button 
                    onClick={prevChunk} 
                    disabled={currentChunk === 0}
                    className="p-2 bg-gray-400 text-white rounded-md disabled:opacity-50"
                >
                    <IoIosArrowDropleftCircle />
                </button>
                <button 
                    onClick={nextChunk} 
                    disabled={currentChunk === chunkedCategories.length - 1}
                    className="p-2 bg-gray-400 text-white rounded-md disabled:opacity-50"
                >
                    <IoIosArrowDroprightCircle />
                </button>
            </div>
           
            <Category 
                currentCategory={currentCategory} 
                setCurrentCategory={setCurrentCategory} 
                categories={chunkedCategories[currentChunk]} 
                animationKey={animationKey}
            />
          
           
        

    </div>
    )
}

export default CategoryContainer