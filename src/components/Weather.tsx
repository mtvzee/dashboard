import { FC, useEffect, useState } from 'react';
import { WeatherData } from '../../types/weatherData';

const Weather:FC = () => {
  const [data, setData] = useState<WeatherData>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_OW_API_URL}/weather?q=Tokyo&appid=${process.env.REACT_APP_OW_API_KEY}&units=metric&lang=ja`
      );
      const data = await res.json();
      setData(data);
    };
    fetchWeatherData();
  }, []);

  return (
    <>
      <div
        className="absolute top-0 flex flex-col cursor-pointer right-3"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center">
          <img
            src={`${process.env.REACT_APP_OW_ICON_URL}/${data?.weather[0].icon}.png`}
            alt="weather-icon"
            className="w-10 h-10"
          />
          <div className="text-2xl">{data?.main.temp.toFixed(1)}℃</div>
        </div>
        <h2 className="self-end">{data?.name}</h2>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute right-5 bg-black top-20 w-[350px] h-[250px] p-4 rounded-lg rounded-tr-none"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{data?.name}</h2>
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
