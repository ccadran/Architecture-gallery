"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./style.module.scss";

export default function NextImageSlider({ content }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  const nextSlide = () => {
    if (!isAnimated) {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isAnimated) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const tlNext = gsap.timeline({});

    tlNext
      .set(`.${styles.next}`, { opacity: 1 })
      .to(`.${styles.next}`, { x: "100%", scale: 1 }, 0)
      .set(`.${styles.next}`, { opacity: 0 }, 1);

    const tlPrev = gsap.timeline({});

    tlPrev
      .set(`.${styles.prev}`, { opacity: 1 })
      .to(`.${styles.prev}`, { x: "-110%", scale: 1.2 }, 0)
      .set(`.${styles.prev}`, { opacity: 0 }, 1);

    const tlCurrent = gsap.timeline({});

    tlCurrent
      .set(`.${styles.current}`, { opacity: 1 })
      .to(`.${styles.current}`, { scale: 1, x: 0 }, 0);

    const timeline = gsap.timeline({
      delay: 0,
      onComplete: () => {
        setIsAnimated(false);
      },
    });
    timeline
      .add(tlCurrent)
      .add(tlNext, 0) // Animation suivante
      .add(tlPrev, 0);
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
      <button onClick={prevSlide} disabled={isAnimated}>
        Previous
      </button>
      <button onClick={nextSlide} disabled={isAnimated}>
        Next
      </button>
    </div>
  );
}
