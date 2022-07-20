import Background from './components/Background';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const App = () => {
  return (
    <Background>
      <div className="flex flex-col items-center">
        <div className="text-9xl drop-shadow-xl shadow-black font-bold">
          18:00
        </div>
        <div className="text-6xl drop-shadow-xl shadow-black">
          2022/07/20(Wen)
        </div>
        <form className="flex items-center w-80 md:w-[500px] backdrop-opacity-30  bg-white/30 py-4 px-6 backdrop-invert rounded-full space-x-3">
          <BiSearch className="w-8 h-8 flex-none" />
          <input
            type="text"
            placeholder="Search"
            className=" placeholder:text-white bg-transparent flex-auto outline-none text-3xl"
          />
          <AiOutlineGoogle className="w-8 h-8 flex-none" />
        </form>
      </div>
    </Background>
  );
};

export default App;
