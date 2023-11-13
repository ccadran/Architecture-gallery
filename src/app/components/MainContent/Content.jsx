"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./style.module.scss";

export default function NextImageSlider({
  content,
  currentIndex,
  isPrev,
  isNext,
}) {
  useEffect(() => {
    const tlNext = gsap.timeline({});
    const tlPrev = gsap.timeline({});
    const tlCurrent = gsap.timeline({});

    if (isPrev) {
      gsap.set(`.${styles.prev}`, { zIndex: 1 });
      gsap.set(`.${styles.next}`, { zIndex: 2 });
    }
    if (isNext) {
      gsap.set(`.${styles.prev}`, { zIndex: 2 });
      gsap.set(`.${styles.next}`, { zIndex: 1 });
    }

    tlNext
      .set(`.${styles.next}`, { opacity: 1, x: 0 })
      .to(`.${styles.next}`, { x: "100%", scale: 1 }, 0)
      .set(`.${styles.next}`, { opacity: 0 }, 1);

    tlPrev
      .set(`.${styles.prev}`, { opacity: 1, x: 0 })
      .to(`.${styles.prev}`, { x: "-110%", scale: 1.2 }, 0)
      .set(`.${styles.prev}`, { opacity: 0 }, 1);

    tlCurrent
      .set(`.${styles.current}`, { opacity: 1, zIndex: 2 })
      .to(`.${styles.current}`, { scale: 1, x: 0 }, 0);

    const timeline = gsap.timeline({
      delay: 0,
    });
    timeline.add(tlCurrent).add(tlPrev, 0).add(tlNext, 0);
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.currentImageSlider}>
        {content.map((item, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === (currentIndex + 1) % content.length;
          const isPrev =
            index === (currentIndex - 1 + content.length) % content.length;

          return (
            <div
              key={index}
              className={`${styles.currentImageContainer} ${
                isCurrent
                  ? styles.current
                  : isNext
                  ? `${styles.next} `
                  : isPrev
                  ? `${styles.prev} `
                  : ""
              }`}
            >
              <img
                src={item.src}
                alt={`slide-${index}`}
                className={styles.currentImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
