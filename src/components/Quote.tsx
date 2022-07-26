import { FC, useEffect, useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';

type QuoteType = {
  text: string;
  author: string;
};

const Quote: FC = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch('https://type.fit/api/quotes');
      const data = await res.json();
      setQuotes(data);
    };
    fetchQuotes();
  }, []);

  return (
    <div className="absolute w-2/3 -translate-x-1/2 bottom-3 left-1/2 group">
      <blockquote className="flex flex-col items-center">
        <p className="text-center">"{quotes[randomNum]?.text}"</p>
        <footer>{quotes[randomNum]?.author}</footer>
      </blockquote>
      <button className="absolute invisible transition duration-1000 -translate-y-1/2 opacity-0 top-1/2 -right-5 group-hover:opacity-100 group-hover:visible" onClick={()=>setRandomNum(Math.floor(Math.random()*quotes.length))}>
        <AiOutlineReload className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Quote;
