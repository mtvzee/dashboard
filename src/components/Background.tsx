import { FC, ReactNode, useEffect, useState } from 'react';
import { BackgroundType } from '../../types/background';

type Props = {
  children: ReactNode;
};

const Background: FC<Props> = ({ children }) => {
  const [bgImage, setBgImage] = useState<BackgroundType>();
  useEffect(() => {
    const fetchBackgroundImage = async () => {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?query=landscape&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      const data = await res.json();
      setBgImage(data);
    };
    fetchBackgroundImage();
  }, []);
  return (
    <div
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgImage?.urls.full})`,
      }}
    >
      <div className="absolute text-xs bottom-3 left-3">
        {bgImage?.location.title ?? ''}
      </div>
      {children}
    </div>
  );
};

export default Background;
