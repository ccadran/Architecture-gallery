"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./content.module.scss";
import { motion } from "framer-motion";
import { TitleIn } from "./anim";

export default function NextImageSlider({
  content,
  currentIndex,
  isPrev,
  isNext,
}) {
  const newCurrentIndex = (currentIndex - 1 + content.length) % content.length;
  useEffect(() => {
    const tlNext = gsap.timeline({});
    const tlPrev = gsap.timeline({});
    const tlCurrent = gsap.timeline({});
    const tlTitle = gsap.timeline({});
    const tlDescription = gsap.timeline({});

    tlTitle.fromTo(
      `.${styles.title}`,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0 },
      0.5
    ); // Adjust the duration and delay as needed

    tlDescription.fromTo(
      `.${styles.description}`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 },
      0.25
    );

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
      .set(`.${styles.current}`, { opacity: 1, zIndex: 2, scale: 1.2 })
      .to(`.${styles.current}`, { scale: 1, x: 0 }, 0);

    const timeline = gsap.timeline({
      delay: 0,
    });
    if (isPrev) {
      console.log("prev");
      timeline
        .add(tlCurrent, 0)
        .add(tlPrev, 0)
        .add(tlNext, 0)
        .add(tlDescription, 0)
        .add(TitleIn, 0.2);
    } else if (isNext) {
      timeline
        .add(tlCurrent, 0.2)
        .add(tlPrev, 0.2)
        .add(tlNext, 0.2)
        .add(tlDescription, 0)
        .add(TitleIn, 0.2);
    }
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.currentImageSlider}>
        {content.map((item, index) => {
          const isCurrent = index === newCurrentIndex;
          const isNext = index === (newCurrentIndex + 1) % content.length;
          const isPrev =
            index === (newCurrentIndex - 1 + content.length) % content.length;

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
      <div className={styles.infos}>
        <motion.h2 className={styles.title}>
          {content[newCurrentIndex].title}
        </motion.h2>
        <p className={styles.description}>
          {content[newCurrentIndex].shortDescription}{" "}
        </p>
      </div>
    </div>
  );
}
