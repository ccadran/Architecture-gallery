import React, { useState } from "react";
import Content from "./MainContent/Content";
import content from "../../../content/content.json";
import NextImageSlider from "./NextImageSlider/NextImageSlider";
import HeroSlider from "../HeroSlider/Hero";
import styles from "./hero.module.scss";
import Image from "next/image";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const nextSlide = () => {
    if (!isAnimated) {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimated(true);
      setIsNext(true);
      setTimeout(() => {
        setIsAnimated(false);
        setIsNext(false);
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (!isAnimated) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
      setIsAnimated(true);
      setIsPrev(true);

      setTimeout(() => {
        setIsAnimated(false);
        setIsPrev(false);
      }, 1000);
    }
  };
  return (
    <div className={styles.heroSlider}>
      <div className={styles.currentContent}>
        <Content
          content={content}
          currentIndex={currentIndex}
          isPrev={isPrev}
          isNext={isNext}
        />
        <div className={styles.controller}>
          <div className={styles.controllerPrev} onClick={prevSlide}>
            <Image src="/assets/icons/left-arrow.svg" width="25" height="25" />
            <p>See last one</p>
          </div>
          <div className={styles.controllerNext} onClick={nextSlide}>
            <p>See next one</p>
            <Image src="/assets/icons/right-arrow.svg" width="25" height="25" />
          </div>
        </div>
      </div>
      <div className={styles.nextContent}>
        <NextImageSlider
          content={content}
          currentIndex={currentIndex}
          isPrev={isPrev}
          isNext={isNext}
        />
      </div>
    </div>
  );
}
