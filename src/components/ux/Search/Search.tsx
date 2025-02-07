import { FaSearch } from 'react-icons/fa';

interface IProps {
  value: string;
  setValue: (prev: string) => void;
}

const Search: React.FC<IProps> = ({ value, setValue }) => {
  return (
    <div className="bg-gray-200 max-w-[230px] w-full rounded-sm flex justify-center items-center pl-3 pr-3 min-h-[30px]">
      <input
        type="text"
        placeholder="Search..."
        className="text-black  pl-[15px] font-medium"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className=" cursor-pointer">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
