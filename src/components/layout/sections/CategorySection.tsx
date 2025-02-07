import CategoryContainer from "@components/ux/Category/CategoryContainer";


const CategorySection: React.FC = () => {


    return (
        <section className=" border-b border-b-gray-700 ">
            <div className="flex flex-col items-start justify-center gap-5">
                <div className="flex justify-center items-center gap-3">
                    <div className="bg-red-400 w-[20px] h-[40px] rounded-[5px]" /> 
                    <span className="text-red-400 text-2xl">Categories</span>
                </div>
                <h3 className="text-4xl text-black">
                    Browse By Category 
                </h3>
                
            </div>

            <CategoryContainer />

        </section>
    )
}

export default CategorySection;