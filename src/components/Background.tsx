import { FC, ReactNode, useEffect, useState } from 'react';

type BgImage = {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

type Props = {
  children: ReactNode;
};

const Background: FC<Props> = ({ children }) => {
  const [bgImageData, setBgImageData] = useState<BgImage[]>([]);
  useEffect(() => {
    const fetchBackgroundImage = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=28160622-0377c9a513987770fa00672f3&q=ocean&image_type=photo`
      );
      const data = await res.json();
      setBgImageData(data.hits);
    };
    fetchBackgroundImage();
  }, []);
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${
          bgImageData[Math.floor(Math.random() * bgImageData.length)]
            ?.largeImageURL
        })`,
      }}
    >
      {children}
    </div>
  );
};

export default Background;
