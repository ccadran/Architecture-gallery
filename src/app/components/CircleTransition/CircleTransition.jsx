import React from "react";
import styles from "./circle.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Content() {
  const { scrollYProgress } = useScroll({
    target: window,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <motion.div style={{ height }} className={styles.circleContainer}>
      <div className={styles.circle}></div>
    </motion.div>
  );
}
