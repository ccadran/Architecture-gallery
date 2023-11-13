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
    <main className={styles.main}>
      <div className={styles.currentContent}>
        <Nav />
        <Content
          content={content}
          currentIndex={currentIndex}
          isPrev={isPrev}
          isNext={isNext}
        />
        <div className={styles.controller}>
          <button onClick={prevSlide} disabled={isAnimated}>
            Previous
          </button>
          <button onClick={nextSlide} disabled={isAnimated}>
            Next
          </button>
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
    </main>
  );
}
