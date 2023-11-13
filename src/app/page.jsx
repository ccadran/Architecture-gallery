"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./components/Nav/Nav";
import Controller from "./components/SliderController/Controller";
import Content from "./components/MainContent/Content";
import content from "../content/content.json";
import NextImageSlider from "./components/NextImageSlider/NextImageSlider";
import gsap from "gsap";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  const nextSlide = () => {
    if (!isAnimated) {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimated(true);

      // Ajustez le zIndex
      gsap.set(`.${styles.prev}`, { zIndex: 1 });
      gsap.set(`.${styles.next}`, { zIndex: 2 });

      setTimeout(() => {
        setIsAnimated(false);
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (!isAnimated) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
      setIsAnimated(true);

      // Ajustez le zIndex
      gsap.set(`.${styles.prev}`, { zIndex: 2 });
      gsap.set(`.${styles.next}`, { zIndex: 1 });

      setTimeout(() => {
        setIsAnimated(false);
      }, 1000);
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.currentContent}>
        <Nav />
        <Content />
        <Controller />
        <button onClick={prevSlide} disabled={isAnimated}>
          Previous
        </button>
        <button onClick={nextSlide} disabled={isAnimated}>
          Next
        </button>
      </div>
      <div className={styles.nextContent}>
        <NextImageSlider content={content} currentIndex={currentIndex} />
      </div>
    </main>
  );
}
