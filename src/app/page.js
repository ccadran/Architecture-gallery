import Image from "next/image";
import styles from "./page.module.scss";
import Nav from "./components/Nav/Nav";
import Controller from "./components/SliderController/Controller";
import Content from "./components/MainContent/Content";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.currentContent}>
        <Nav />
        <Controller />
        <Content />
      </div>
      <div className={styles.nextContent}>
        <h1>test</h1>
      </div>
    </main>
  );
}
