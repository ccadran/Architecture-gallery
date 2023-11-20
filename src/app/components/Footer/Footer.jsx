import styles from "./footer.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <h1>Footer</h1>
      </div>
      <div className={styles.footerTransition}></div>
    </div>
  );
}
