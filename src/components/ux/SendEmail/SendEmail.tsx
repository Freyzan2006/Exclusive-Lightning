interface IProps {
  value: string;
  setValue(priv: string): void;
  onSubmit(value: string): void;
}
import { FaTelegramPlane } from 'react-icons/fa';

const SendEmail: React.FC<IProps> = ({ value, setValue, onSubmit }) => {
  return (
    <form className="flex border-1 border-white rounded-[5px] min-h-[50px] max-w-[200px] pl-3 pr-3">
      <input
        placeholder="Enter your email"
        className="text-white outline-none pl-3"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        className="cursor-pointer hover:scale-120 transition-all"
        onClick={() => onSubmit(value)}
      >
        <FaTelegramPlane />
      </button>
    </form>
  );
};

export default SendEmail;
