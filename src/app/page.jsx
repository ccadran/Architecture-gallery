"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./components/Nav/Nav";
import content from "../content/content.json";
import HeroSlider from "./components/HeroSlider/Hero";
import Description from "./components/Description/Description";
import Content from "./components/Content/Content";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className={styles.main}>
      <Nav />
      <HeroSlider />
      <Description />
      <Content />
    </main>
  );
}
