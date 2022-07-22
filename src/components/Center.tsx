import dayjs from 'dayjs';
import { FC } from 'react';

import SearchBar from './SearchBar';

const Center: FC = () => {
  return (
    <div className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="font-bold text-9xl drop-shadow-xl shadow-black">
        {dayjs().format('HH:mm')}
      </div>
      <div className="text-6xl drop-shadow-xl shadow-black">
        {dayjs().format('MM/DD(ddd)')}
      </div>
      <SearchBar />
    </div>
  );
};

export default Center;
