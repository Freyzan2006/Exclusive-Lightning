import React from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
  currentIndex: number;
  goToImage: (index: number) => void;
  animateKey: number;
  contents: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  currentIndex,
  goToImage,
  animateKey,
  contents,
}) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageContainer}>
        <img
          key={animateKey}
          src={`${images[currentIndex]}`}
          alt="carousel"
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer} key={animateKey}>
        {contents[currentIndex]}
      </div>

      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
