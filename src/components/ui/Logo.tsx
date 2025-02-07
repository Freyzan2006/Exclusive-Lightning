import { Link } from 'react-router';

interface IProps {
  nameLogo: string;
  className?: string;
}

const Logo: React.FC<IProps> = ({ nameLogo, className }) => {
  return (
    <div>
      <Link to="/">
        <h1 className={` font-bold text-black text-2xl md:text-4xl ${className}`}>
          {nameLogo}
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
