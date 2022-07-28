import { FormEvent, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

type Link = {
  name: string;
  url: string;
  domain: string;
};

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [linkList, setLinkList] = useState<Link[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !url) return;
    setLinkList([
      ...linkList,
      { name, url, domain: new URL(url).hostname.replace('www.', '') },
    ]);
    setName('');
    setUrl('');
    setShowForm(false);
  };

  return (
    <>
      <button className="absolute top-3 left-3" onClick={() => setIsOpen(true)}>
        Links
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}>
          <div
            className="absolute w-64 p-4 bg-black rounded-lg rounded-tl-none top-10 left-3"
            onClick={(e) => e.stopPropagation()}
          >
            {showForm ? (
              <div>
                <button
                  className="transition text-neutral-400 hover:text-white"
                  onClick={() => setShowForm(false)}
                >
                  <AiOutlineArrowLeft className="w-6 h-6" />
                </button>
                <form
                  className="flex flex-col space-y-4"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <label>
                    <div>名前</div>
                    <input
                      type="text"
                      className="w-full px-2 py-1 bg-transparent border-b outline-none border-b-neutral-400 focus:border-b-neutral-100"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label>
                    <div>URL</div>
                    <input
                      type="text"
                      placeholder="https://www.example.com"
                      className="w-full px-2 py-1 bg-transparent border-b outline-none border-b-neutral-400 focus:border-b-neutral-100"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </label>
                  <button className="py-1 transition rounded-full bg-neutral-500 hover:bg-neutral-500/80 ">
                    作成
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <ul>
                  {linkList.map((link) => (
                    <li className="flex items-center p-1">
                      <a
                        href={link.url}
                        className="flex items-center flex-auto space-x-2 text-neutral-300 hover:text-white"
                      >
                        <img
                          src={`http://www.google.com/s2/favicons?domain=${link.domain}`}
                          alt="favicon"
                          className="w-5 h-5"
                        />
                        <span>{link.name}</span>
                      </a>
                      <button>
                        <BsThreeDots />
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-white"
                  onClick={() => setShowForm(true)}
                >
                  <AiOutlinePlus className="w-4 h-4" />
                  <span>リンクを作成</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
