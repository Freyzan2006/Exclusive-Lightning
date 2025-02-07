import { Link } from 'react-router';

interface IProps {
  title: string | React.ReactNode;
  to: string;
  className?: string
}

const LinkPath: React.FC<IProps> = ({ title, to, className }) => {
  return (
    <Link
      to={to}
      className={`text-black font-semibold relative before:content-[''] before:absolute before:w-0 hover:before:w-full before:h-0.5 before:bg-black before:bottom-[-10px] 
        before:scale-x-0 before:origin-left before:transition-all duration-300 ease-in-out hover:before:scale-x-100 hover:before:bottom-0 hover:before:opacity-100
        opacity-70 hover:opacity-100 ${className}
        `}
    >
      {title}
    </Link>
  );
};

export default LinkPath;
