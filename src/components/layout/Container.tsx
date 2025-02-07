interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`max-w-[1140px] w-full mt-0 mb-0 ml-auto mr-auto pt-0 pb-0 pl-[15px] pr-[15px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
