import { useRef } from "react";
import styles from "./card.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Card({ src, title, shortDescription, color }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <div style={{ backgroundColor: color }} className={styles.card}>
        <h2>{title}</h2>
        <p>{shortDescription}</p>
        <div className={styles.imgContainer}>
          <motion.div style={{ scale }} className={styles.inner}>
            <img src={src} alt="image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
