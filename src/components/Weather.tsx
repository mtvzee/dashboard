import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { WeatherData } from '../../types/weatherData';

const Weather: FC = () => {
  const [data, setData] = useState<WeatherData>();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [city, setCity] = useState('tokyo');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_OW_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_OW_API_KEY}&units=metric&lang=ja`
      );
      const data = await res.json();
      setData(data);
    };
    fetchWeatherData();
  }, [city]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current?.value !== '') {
      setCity(inputRef.current.value);
      inputRef.current.value = '';
      setIsEditing(false);
    }
  };

  return (
    <>
      <div
        className="absolute flex flex-col cursor-pointer top-3 right-3"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center">
          {data && (
            <img
              src={`${process.env.REACT_APP_OW_ICON_URL}/${data?.weather[0].icon}.png`}
              alt="weather-icon"
              className="w-8 h-8"
            />
          )}
          <div className="text-2xl">{data?.main.temp.toFixed(1)}℃</div>
        </div>
        <h2 className="self-end">{data?.name}</h2>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}>
          <div
            className="absolute right-5 bg-black top-20 w-[350px] h-[250px] p-4 rounded-lg rounded-tr-none"
            onClick={(e) => e.stopPropagation()}
          >
            {isEditing ? (
              <div className="flex items-center h-10">
                <form onSubmit={(e) => handleSubmit(e)} className="flex-auto">
                  <input
                    type="text"
                    placeholder="都市名（例：Yokohama）"
                    className="w-full bg-transparent outline-none focus:border-b"
                    ref={inputRef}
                  />
                </form>
                <button onClick={() => setIsEditing(false)}>
                  <AiOutlineClose className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center h-10 space-x-4">
                <h2 className="text-xl">{data?.name}</h2>
                <button onClick={() => setIsEditing(true)}>
                  <AiOutlineEdit className="w-5 h-5" />
                </button>
              </div>
            )}
            <p>{data?.weather[0].description}</p>
            <div className="flex items-center">
              <img
                src={`${process.env.REACT_APP_OW_ICON_URL}/${data?.weather[0].icon}.png`}
                alt="weather-icon"
                className="w-24 h-24"
              />
              <div className="text-6xl">{data?.main.temp.toFixed(1)}℃</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-blue-500">
                <h2>最低気温</h2>
                <div>{data?.main.temp_min.toFixed(1)}℃</div>
              </div>
              <div className="text-red-500">
                <h2>最高気温</h2>
                <div>{data?.main.temp_max.toFixed(1)}℃</div>
              </div>
              <div>
                <h2>風速</h2>
                <div>{data?.wind.speed.toFixed(1)}m/s</div>
              </div>
              <div>
                <h2>湿度</h2>
                <div>{data?.main.humidity}%</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
