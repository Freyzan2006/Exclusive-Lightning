import { Link } from 'react-router';
import Container from './Container';
import DropdownContainer from '@components/ui/Dropdown/DropdownContainer';

import { pathsApp } from '@routers/pathsApp';
import LinkPath from '@components/ui/LinkPath';

import CarouselContainer from '@components/ux/Carousel/CarouselContainer';
import CarouselContent from '@components/ux/Carousel/CarouselContent';

import NavBar from './NavBar';

const Header: React.FC = () => {
  const images = [
    'CarouselImg/Carousel1.png',
    'CarouselImg/Carousel2.jpg',
    'CarouselImg/Carousel3.jpg',
  ];

  const contents: React.ReactNode[] = [
    <CarouselContent
      img="CarouselImg/logo1.png"
      title="Iphone 14 Series"
      discount="Up to 10% off Voucher"
      path={pathsApp.getPath('showNow')}
    />,
    <CarouselContent
      img="CarouselImg/logo2.jpg"
      title="PC Pro game"
      discount="Up to 30% off Voucher"
      path={pathsApp.getPath('showNow')}
    />,
    <CarouselContent
      img="CarouselImg/logo3.png"
      title="Laptop Pro game"
      discount="Up to 5% off Voucher"
      path={pathsApp.getPath('showNow')}
    />,
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

      <NavBar />

      <Container>
        <section className="flex flex-col sm:flex-row justify-between items-start w-full gap-3">
          <ul className="max-w-[300px] w-full min-h-[350px] border-r border-r-gray-300 flex flex-col gap-5 text-lg pt-5">
            <li>
              <LinkPath
                title="Woman's Fashion"
                to={pathsApp.getPath('WomanFashion')}
              />
            </li>
            <li>
              <LinkPath
                title="Men's Fashion"
                to={pathsApp.getPath('MenFashion')}
              />
            </li>
            <li>
              <LinkPath
                title="Electronics"
                to={pathsApp.getPath('Electronics')}
              />
            </li>
            <li>
              <LinkPath
                title="Home & Lifestyle"
                to={pathsApp.getPath('HomeAndLifestyle')}
              />
            </li>
            <li>
              <LinkPath title="Medicine" to={pathsApp.getPath('Medicine')} />
            </li>
            <li>
              <LinkPath title="Sports" to={pathsApp.getPath('Sports')} />
            </li>
          </ul>

          <div className="pt-5 w-full sm:max-w-[800px] sm:w-[800px] overflow-hidden">
            <CarouselContainer
              images={images}
              interval={15000}
              contents={contents}
            />
          </div>
        </section>
      </Container>
    </header>
  );
};

export default Header;
