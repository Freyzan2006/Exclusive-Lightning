import Logo from '@components/ui/Logo';
import Container from './Container';
import SendEmailContainer from '@componentsUX/SendEmail/SendEmailContainer';
import LinkPath from '@components/ui/LinkPath';

import { pathsApp } from '@routers/pathsApp';

import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaTelegram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black flex flex-col gap-8 pt-3">
      <Container>
        <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start flex-wrap gap-3 ">
          <ul className="flex flex-col items-start gap-5">
            <li>
              <Logo nameLogo="Exclusive" className="text-white font-light" />
            </li>
            <li className="text-2xl text-white">Subscribe</li>
            <li className="text-white">Get 10% off your first order</li>
            <li>
              <SendEmailContainer />
            </li>
          </ul>

          <ul className="flex flex-col items-start gap-5">
            <li className="text-2xl text-white">Support</li>
            <li className="text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </li>
            <li className="text-white">exclusive@gmail.com</li>
            <li className="text-white">+88015-88888-9999</li>
          </ul>

          <ul className="flex flex-col items-start gap-5">
            <li className="text-2xl text-white">Account</li>
            <li>
              <LinkPath
                title="My Account"
                to={pathsApp.getPath('Account')}
                className="text-white before:bg-white"
              />
            </li>
            <li>
              <LinkPath
                title="Login"
                to={pathsApp.getPath('Login')}
                className="text-white before:bg-white"
              />
            </li>
            <li>
              <LinkPath
                title="Cart"
                to={pathsApp.getPath('Cart')}
                className="text-white before:bg-white"
              />
            </li>
            <li>
              <LinkPath
                title="Wishlist"
                to={pathsApp.getPath('Wishlist')}
                className="text-white before:bg-white"
              />
            </li>
            <li>
              <LinkPath
                title="Shop"
                to={pathsApp.getPath('Shop')}
                className="text-white before:bg-white"
              />
            </li>
          </ul>

          <ul className="flex flex-col items-start gap-5">
            <li className="text-2xl text-white">Quick Link</li>
            <li>
              <LinkPath
                title="Privacy Policy"
                to={pathsApp.getPath('Privacy')}
                className="text-white before:bg-white"
              />
            </li>
            <li>
              <LinkPath
                title="Terms Of Use"
                to={pathsApp.getPath('Terms')}
                className="text-white before:bg-white"
              />
            </li>
            <li>
              <LinkPath
                title="FAQ"
                to={pathsApp.getPath('FAQ')}
                className="text-white before:bg-white"
              />
            </li>
            <li>
              <LinkPath
                title="Contact"
                to={pathsApp.getPath('Contact')}
                className="text-white before:bg-white"
              />
            </li>
          </ul>

          <ul className="flex flex-col items-start gap-5">
            <li className="text-2xl text-white">Download App</li>

            <li>
              <div className="flex justify-center items-center flex-wrap gap-5">
                <button className="justify-center items-center cursor-pointer hover:scale-105 transition-all flex border-1 border-white rounded-[5px] min-h-[50px] max-w-[200px] pl-3 pr-3">
                  <FaGooglePlay /> Скачать
                </button>

                <button className="justify-center items-center cursor-pointer hover:scale-105 transition-all flex border-1 border-white rounded-[5px] min-h-[50px] max-w-[200px] pl-3 pr-3">
                  <FaApple /> Скачать
                </button>
              </div>
            </li>

            <ul className="flex  justify-center items-center gap-5">
              <li>
                <LinkPath
                  title={<FaFacebook />}
                  to={pathsApp.getPath('FaceBook')}
                  className="text-white before:bg-white text-2xl"
                />
              </li>
              <li>
                <LinkPath
                  title={<FaTwitterSquare />}
                  to={pathsApp.getPath('Twitter')}
                  className="text-white before:bg-white text-2xl"
                />
              </li>
              <li>
                <LinkPath
                  title={<FaInstagram />}
                  to={pathsApp.getPath('Instagram')}
                  className="text-white before:bg-white text-2xl"
                />
              </li>
              <li>
                <LinkPath
                  title={<FaTelegram />}
                  to={pathsApp.getPath('Telegram')}
                  className="text-white before:bg-white text-2xl"
                />
              </li>
            </ul>
          </ul>
        </section>
      </Container>

      <div className="border-t text-gray-800 border-t-gray-500 w-full flex justify-center items-center min-h-[100px]">
        Copyright Rimel 2025. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
