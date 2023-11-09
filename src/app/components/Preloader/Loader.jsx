"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { imageDown } from "./anim";
import motion from "framer-motion";

const images = [
  "/assets/images/blobism.jpg",
  "/assets/images/brutalism.jpg",
  "/assets/images/high-tech.jpg",
  "/assets/images/metabolism.jpg",
  "/assets/images/modernist.jpg",
];

export default function Loader() {
  return (
    <div className={styles.loader}>
      <h1>Architecture</h1>
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <motion.Image
            src={image}
            className={styles.image}
            width={200}
            height={300}
            objectFit="cover"
            key={index}
            variants={imageDown}
            initial="initial"
            animate="open"
          />
        ))}
      </div>
    </div>
  );
}
