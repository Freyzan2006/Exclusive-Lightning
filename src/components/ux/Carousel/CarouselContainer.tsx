import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

interface CarouselContainerProps {
  images: string[];
  interval: number;
  contents: React.ReactNode[];
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({
  images,
  interval,
  contents,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    setAnimateKey((prevKey) => prevKey + 1);
  }, [currentIndex]);

  return (
    <Carousel
      images={images}
      currentIndex={currentIndex}
      goToImage={goToImage}
      animateKey={animateKey}
      contents={contents}
    />
  );
};

export default CarouselContainer;
