import { FC } from 'react';
import Clock from './Clock';

import SearchBar from './SearchBar';

const Center: FC = () => {
  return (
    <div className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Clock />
      <SearchBar />
    </div>
  );
};

export default Center;
