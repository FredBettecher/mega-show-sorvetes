"use client";

import { useEffect, useState } from 'react';
// import useWindowSize from '../hooks/windowSize';

const BackgroundComponent = ({ images }) => {
  const [index, setIndex] = useState(0);
  // const { width } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 0; i < images.length; i++) {
        setIndex(index + 1);
        if (index == images.length - 1) setIndex(0);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  // const backgroundImage = width >= 1024 ? imagesDesktop[index] : imagesMobile[index];

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      <img key={index} src={images[index]} alt='Mega Show' className='absolute inset-0 w-full h-full object-cover transition ease-linear duration-[800ms] animate-fade-in-out' />
    </div>
  );
};

export default BackgroundComponent;
