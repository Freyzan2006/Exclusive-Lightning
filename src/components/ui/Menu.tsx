import { pathsApp } from '@routers/pathsApp';
import LinkPath from './LinkPath';

const Menu: React.FC = () => {
  return (
    <menu className="flex justify-center items-start md:item-center gap-5 flex-col md:flex-row ">
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
  );
};

export default Menu;
