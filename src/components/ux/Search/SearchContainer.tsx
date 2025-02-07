import { useState } from 'react';
import Search from './Search';

const SearchContainer: React.FC = () => {
  const [value, setValue] = useState<string>('');

  return <Search value={value} setValue={setValue} />;
};

export default SearchContainer;
