import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const Carousel: React.FC = () => {
  const images: string[] = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carousel}>
      <h2 style={{ textAlign: "center" }}>Карусель</h2>
      <div className={styles.carouselImageContainer}>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>

      <button
        onClick={goToPrev}
        className={`${styles.carouselBtn} ${styles.prev}`}
      >
        Назад
      </button>
      <button
        onClick={goToNext}
        className={`${styles.carouselBtn} ${styles.next}`}
      >
        Вперед
      </button>
    </div>
  );
};

export default Carousel;
