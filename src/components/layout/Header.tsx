import { Link } from 'react-router';
import Container from './Container';
import DropdownContainer from '@components/ui/Dropdown/DropdownContainer';
import Logo from '@components/ui/Logo';
import { pathsApp } from '@routers/pathsApp';
import LinkPath from '@components/ui/LinkPath';
import { FaSearch } from 'react-icons/fa';

import { FcLike } from 'react-icons/fc';
import { IoHeartDislikeOutline } from 'react-icons/io5';
import { useState } from 'react';

import { SlBasket } from 'react-icons/sl';
import { SlBasketLoaded } from 'react-icons/sl';

import CarouselContainer from '@components/ux/Carousel/CarouselContainer';
import CarouselContent from '@components/ux/Carousel/CarouselContent';
import CartContainer from '@components/ux/Cart/CartContainer';

const Header: React.FC = () => {
  const [like, setLike] = useState<boolean>(false);
  const [basket, setBasket] = useState<boolean>(false);

  const images = ['CarouselImg/Carousel1.png', 'CarouselImg/Carousel2.jpg', 'CarouselImg/Carousel3.jpg'];

  const contents: React.ReactNode[] = [
    <CarouselContent img = "CarouselImg/logo1.png" title='Iphone 14 Series' discount='Up to 10% off Voucher' path={ pathsApp.getPath("showNow") } />,
    <CarouselContent img = "CarouselImg/logo2.jpg" title='PC Pro game' discount='Up to 30% off Voucher' path={ pathsApp.getPath("showNow") } />,
    <CarouselContent img = "CarouselImg/logo3.png" title='Laptop Pro game' discount='Up to 5% off Voucher' path={ pathsApp.getPath("showNow") } />,
  ];

  return (
    <header>
      <div className="w-full bg-black">
        <Container>
          <div className="flex flex-row justify-end items-center gap-5 flex-wrap">
            <p className=" flex gap-3">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <Link
                to={'/shopNow'}
                className="opacity-50 hover:opacity-100 transition"
              >
                ShopNow
              </Link>
            </p>

            <DropdownContainer
              items={['English', 'Russian']}
              placeholder="English"
            />
          </div>
        </Container>
      </div>

      <nav className="shadow-sm border border-b-gray-300 ">
        <Container>
          <div className="w-full flex justify-between items-end min-h-25 pb-4">
            <Logo nameLogo="Exclusive" />

            <menu className="flex justify-center items-center gap-5">
              <li>
                <LinkPath title="Home" to={pathsApp.getPath('Home')} />
              </li>
              <li>
                <LinkPath title="Contact" to={pathsApp.getPath('Contact')} />
              </li>
              <li>
                <LinkPath title="About" to={pathsApp.getPath('About')} />
              </li>
              <li>
                <LinkPath title="Sign Up" to={pathsApp.getPath('Sign')} />
              </li>
            </menu>

            <div className="bg-gray-200 max-w-[230px] w-full rounded-sm flex justify-center items-center pl-3 pr-3 min-h-[30px]">
              <input
                type="text"
                placeholder="Search..."
                className="text-black  pl-[15px] font-medium"
              />
              <button className=" cursor-pointer">
                <FaSearch />
              </button>
            </div>

            <button
              className="text-black cursor-pointer text-2xl"
              onClick={() => setLike((priv) => !priv)}
            >
              {like ? <FcLike /> : <IoHeartDislikeOutline />}
            </button>

            <button
              className="text-black cursor-pointer text-2xl"
              onClick={() => setBasket((priv) => !priv)}
            >
              {basket ? (
                <SlBasketLoaded className="text-red-500" />
              ) : (
                <SlBasket />
              )}
            </button>
            
              <div className='   relative'>
                {
                  basket && <CartContainer />
                }
              </div>
            
          </div>
        </Container>
      </nav>

      <Container>
   

        <section className="flex flex-col sm:flex-row justify-between items-start w-full gap-3">
        
          <ul className="max-w-[300px] w-full min-h-[350px] border-r border-r-gray-300 flex flex-col gap-5 text-lg pt-5">
            <li><LinkPath title="Woman's Fashion" to={pathsApp.getPath("WomanFashion")} /></li>
            <li><LinkPath title="Men's Fashion" to={pathsApp.getPath("MenFashion")} /></li>
            <li><LinkPath title="Electronics" to={pathsApp.getPath("Electronics")} /></li>
            <li><LinkPath title="Home & Lifestyle" to={pathsApp.getPath("HomeAndLifestyle")} /></li>
            <li><LinkPath title="Medicine" to={pathsApp.getPath("Medicine")} /></li>
            <li><LinkPath title="Sports" to={pathsApp.getPath("Sports")} /></li>
          </ul>


          <div className="pt-5 w-full sm:max-w-[800px] sm:w-[800px]">
            <CarouselContainer images={images} interval={15000} contents={contents} />
          </div>
        </section>

      </Container>
    </header>
  );
};

export default Header;
