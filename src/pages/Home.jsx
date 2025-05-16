import { useState, useEffect } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/bgimg.png",
    "/assets/bgimg2.png",
    "/assets/bgimg3.png",
    "/assets/bgimg4.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slideshow}>
      ,
      <div className={styles.overlay}>
        <h2>Image art for the Quizz</h2>
      </div>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`${styles.slide} ${
            index === currentImage ? styles.active : ""
          }`}
        />
      ))}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentImage ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
