import { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { IoHeartDislikeOutline } from 'react-icons/io5';

const Like: React.FC = () => {
  const [like, setLike] = useState<boolean>(false);

  return (
    <button
      className="text-black cursor-pointer text-2xl"
      onClick={() => setLike((priv) => !priv)}
    >
      {like ? <FcLike /> : <IoHeartDislikeOutline />}
    </button>
  );
};

export default Like;
