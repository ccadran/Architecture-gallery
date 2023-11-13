"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./components/Nav/Nav";
import Controller from "./components/SliderController/Controller";
import Content from "./components/MainContent/Content";
import content from "../content/content.json";
import NextImageSlider from "./components/NextImageSlider/NextImageSlider";
import HeroSlider from "./components/HeroSlider/Hero";
import gsap from "gsap";
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <HeroSlider />
    </main>
  );
}
