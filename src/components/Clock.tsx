import { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';

const Clock: FC = () => {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const timeId = setTimeout(() => setDate(dayjs()), 60000);
    return () => clearTimeout(timeId);
  }, [date]);

  return (
    <>
      <div className="font-bold text-9xl drop-shadow-xl shadow-black">
        {date.format('HH:mm')}
      </div>
      <div className="text-6xl drop-shadow-xl shadow-black">
        {date.format('MM/DD(ddd)')}
      </div>
    </>
  );
};

export default Clock;
