import { useRef } from "react";
import styles from "./card.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Card({
  i,
  src,
  title,
  genre,
  longDescription,
  color,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-10% + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2>
          {title} - <span>{genre}</span>
        </h2>
        <div className={styles.content}>
          <p>{longDescription}</p>
          <div className={styles.imgContainer}>
            <motion.div style={{ scale: imageScale }} className={styles.inner}>
              <img src={src} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
