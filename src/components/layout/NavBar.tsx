import Logo from '@components/ui/Logo';
import Container from './Container';
import Menu from '@components/ui/Menu';


import Like from '@componentsUX/Like/Like';

import SearchContainer from '@components/ux/Search/SearchContainer';
import Basket from '@componentsUX/Basket/Basket';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';


const NavBar: React.FC = () => {
  const [ isOpenNavBar, setIsOpenNavBar ] = useState<boolean>(false)


  return (
    <nav className="shadow-sm border border-b-gray-300">
      <Container className = ' overflow-hidden pl-0 pr-0 md:pl-[15px] md:pr-[15px]'>
        <div className= { `w-[50%] shadow-lg md:shadow-none  md:w-auto fixed md:relative top-0 md:top-auto right-0  md:right-auto bg-white md:bg-inherit z-2 md:z-auto h-full pb-4  flex justify-center md:justify-between gap-2 items-center md:items-end  min-h-25  flex-col md:flex-row ${isOpenNavBar ? "transform-[translateX(105%)] transition-transform" : "" }` }>
          <button className="text-red-500 text-3xl cursor-pointer bg-green-400 rounded-2xl p-5 absolute top-[20px] md:top-[10px] left-[-100px] md:left-[-200px] " 
            onClick = { () => {
              setIsOpenNavBar(priv => !priv) 
            } }>
            { isOpenNavBar ? <TiThMenu /> : <RxCross2 /> }
          </button> 
          
          <Logo nameLogo="Exclusive" />

          <Menu />

          <SearchContainer />
          <Like />

          <Basket />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
