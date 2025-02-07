import { Link } from "react-router";


const AdvertisingSection: React.FC = () => {
    return (
        <section className="bg-black flex justify-center items-center gap-3 flex-wrap">
            <div className="flex flex-col justify-center items-start p-5 gap-5">
                <span className="text-green-500 text-lg">Categories</span>
                <h3 className="text-4xl text-white">
                    Enhance Your Music Experience
                </h3>
                <ul className="flex justify-center items-center flex-wrap gap-5">
                    <li className="bg-white  rounded-[50px] p-2 text-black text-lg">23 Hours</li>
                    <li className="bg-white  rounded-[50px] p-2 text-black text-lg">05 Days</li>
                    <li className="bg-white  rounded-[50px] p-2 text-black text-lg">59 Minutes</li>
                    <li className="bg-white  rounded-[50px] p-2 text-black text-lg">35 Second</li>
                </ul>

                <Link to = "/" className = "rounded-md max-w-[150px] w-full min-h-[50px] bg-green-400 flex justify-center items-center text-white hover:scale-105 transition-all">
                    Buy Now !
                </Link>
            </div>
            <div className="">
                <img className="w-120" src="AdvertisingImg/img1.png" alt="img" />
            </div>
        </section>
    )
}

export default AdvertisingSection;