import dayjs from 'dayjs';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const Center = () => {
  return (
    <div className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="font-bold text-9xl drop-shadow-xl shadow-black">
        {dayjs().format('HH:mm')}
      </div>
      <div className="text-6xl drop-shadow-xl shadow-black">
      {dayjs().format('MM/DD(ddd)')}
      </div>
      <form className="flex items-center  md:w-[500px]  py-4 px-6  rounded-full space-x-3 backdrop-invert backdrop-opacity-70 absolute -bottom-40 w-[350px]">
        <BiSearch className="flex-none w-8 h-8" />
        <input
          type="text"
          placeholder="Search"
          className="flex-auto text-xl bg-transparent outline-none placeholder:text-white md:text-3xl"
        />
        <AiOutlineGoogle className="flex-none w-8 h-8" />
      </form>
    </div>
  );
};

export default Center;
