import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./components/Nav/Nav";
import Controller from "./components/SliderController/Controller";
import Content from "./components/MainContent/Content";
import content from "../content/content.json";
import NextImageSlider from "./components/NextImageSlider/NextImageSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.currentContent}>
        <Nav />
        <Content />
        <Controller />
      </div>
      <div className={styles.nextContent}>
        <NextImageSlider content={content} />
      </div>
    </main>
  );
}
