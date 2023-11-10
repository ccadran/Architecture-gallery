"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./style.module.scss";

export default function NextImageSlider({ content }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timeline = gsap.timeline({
      delay: 0,
    });

    timeline
      .to(`.${styles.current}`, { x: 0, scale: 1, opacity: 1 }, 0) // Animation actuelle
      .to(`.${styles.prev}`, { x: "-110%", scale: 1.2, opacity: 1 }, 0) // Animation précédente
      .to(`.${styles.next}`, { x: "100%", scale: 1, opacity: 1 }); // Animation suivante

    gsap.set(`.${styles.next}`, { opacity: 0 }); // Cacher la prochaine image avant l'animation
    gsap.set(`.${styles.prev}`, { opacity: 0 }); // Cacher l'image précédente avant l'animation
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.nextImageSlider}>
        {content.map((item, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === (currentIndex + 1) % content.length;
          const isPrev =
            index === (currentIndex - 1 + content.length) % content.length;

          return (
            <div
              key={index}
              className={`${styles.nextImageContainer} ${
                isCurrent
                  ? styles.current
                  : isNext
                  ? `${styles.next} ` // Ajoutez la classe visible pour montrer la prochaine image
                  : isPrev
                  ? `${styles.prev} ` // Ajoutez la classe visible pour montrer l'image précédente
                  : ""
              }`}
            >
              <img
                src={item.src}
                alt={`slide-${index}`}
                className={styles.nextImage}
              />
            </div>
          );
        })}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}
