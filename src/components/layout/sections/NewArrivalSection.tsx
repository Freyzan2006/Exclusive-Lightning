import LinkPath from '@components/ui/LinkPath';
import { pathsApp } from '@routers/pathsApp';

const NewArrivalSection: React.FC = () => {
  return (
    <section className="">
      <div className="flex flex-col items-start justify-center gap-5">
        <div className="flex justify-center items-center gap-3">
          <div className="bg-red-400 w-[20px] h-[40px] rounded-[5px]" />
          <span className="text-red-400 text-2xl">Featured</span>
        </div>
        <h3 className="text-4xl text-black">New Arrival</h3>
      </div>

      <div className="grid gap-4 relative lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-2 md:grid-rows-2 ">
        <div className="bg-black row-span-2  col-span-2   flex justify-center items-end pl-5 pb-5">
          <img className="w-full" src="NewArrivalImg/img1.png" alt="ps5" />
          <div className=" absolute ">
            <h3 className="text-white text-md sm:text-3xl">PlayStation 5</h3>
            <p className="text-white text-sm sm:text-2xl">
              Black and White version of the PS5 coming out on sale.
            </p>
            <LinkPath
              title="Show Now"
              to={pathsApp.getPath('PS5')}
              className=" text-white before:bg-white"
            />
          </div>
        </div>
        <div className=" bg-black row-span-1 col-span-2 flex justify-center items-end ">
          <img className="w-full" src="NewArrivalImg/img2.png" alt="" />
          <div className=" absolute mb-5">
            <h3 className="text-white text-md sm:text-3xl">Women’s Collections</h3>
            <p className="text-white text-sm sm:text-md">
              Featured woman collections that give you another vibe.
            </p>
            <LinkPath
              title="Show Now"
              to={pathsApp.getPath('PS5')}
              className=" text-white before:bg-white"
            />
          </div>
        </div>
        <div className="bg-black row-span-1 col-span-1 flex justify-center items-end pl-5 pb-5">
          <img className="w-full" src="NewArrivalImg/img3.png" alt="" />
          <div className=" absolute ">
            <h3 className="text-white text-md sm:text-3xl">Speakers</h3>
            <p className="text-white text-sm sm:text-md">Amazon wireless speakers</p>
            <LinkPath
              title="Show Now"
              to={pathsApp.getPath('PS5')}
              className=" text-white before:bg-white"
            />
          </div>
        </div>
        <div className="bg-black row-span-1 col-span-1 flex justify-center items-end pl-5 pb-5">
          <img className="w-full" src="NewArrivalImg/img4.png" alt="" />
          <div className=" absolute ">
            <h3 className="text-white text-md sm:text-3xl">Perfume</h3>
            <p className="text-white text-sm sm:text-md">GUCCI INTENSE OUD EDP</p>
            <LinkPath
              title="Show Now"
              to={pathsApp.getPath('PS5')}
              className=" text-white before:bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
