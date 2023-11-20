import { useRef } from "react";
import styles from "./footer.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
  return (
    <div ref={container} className={styles.footerContainer}>
      <div className={styles.footer}>
        <h1>Footer</h1>
      </div>
      <motion.div
        style={{ height }}
        className={styles.footerTransition}
      ></motion.div>
    </div>
  );
}
