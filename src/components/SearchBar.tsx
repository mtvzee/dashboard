import { FC, FormEvent, useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const SearchBar: FC = () => {
  const [keyword, setKeyword] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.replace(`https://www.google.com/search?q=${keyword}`);
    setKeyword('');
  };
  return (
    <form
      className="flex items-center  md:w-[500px]  py-4 px-6  rounded-full space-x-3 backdrop-invert backdrop-opacity-70 absolute -bottom-40 w-[350px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <BiSearch className="flex-none w-8 h-8" />
      <input
        type="text"
        placeholder="Search"
        className="flex-auto text-xl bg-transparent outline-none placeholder:text-white md:text-3xl"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button>
        <AiOutlineGoogle className="flex-none w-8 h-8" />
      </button>
    </form>
  );
};

export default SearchBar;
