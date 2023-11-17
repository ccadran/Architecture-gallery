"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./components/Nav/Nav";
import content from "../content/content.json";
import HeroSlider from "./components/HeroSlider/Hero";
import Description from "./components/Description/Description";
import Content from "./components/Content copy/Content";
import gsap from "gsap";
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <HeroSlider />
      <Description />
      <Content />
    </main>
  );
}
