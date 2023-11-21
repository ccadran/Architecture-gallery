import { useRef } from "react";
import styles from "./footer.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import content from "../../../content/content.json";

export default function Footer() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end end"],
  });

  const numColumns = 10;

  // Utilisez la propriété 'map' pour créer une valeur spécifique pour chaque colonne
  const heights = [...Array(numColumns)].map((_, index) =>
    useTransform(scrollYProgress, [0, 1], [`${100 + index * 25}vh`, "0vh"])
  );

  return (
    <div ref={container} className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.credits}>
          {content.map((item, index) => {
            return (
              <div className={styles.credit}>
                <div className={styles.imgContainer}>
                  <img src={item.src} alt="" />
                </div>
                <p>{item.author}, via Unsplash</p>
              </div>
            );
          })}
        </div>
        <div className={styles.presentation}>
          <div className={styles.qrContainer}>
            <img src="/assets/images/qr-code.png" alt="qr code" />
          </div>
          <h2>Designed and developed by Clario Cadran</h2>
          <div className={styles.socials}>
            <a href="https://github.com/ccadran">Linkedin</a>
            <a href="https://github.com/ccadran">GitHub</a>
            <a href="https://github.com/ccadran">Instagram</a>
          </div>
        </div>
      </div>
      <motion.div className={styles.footerColumnContainer}>
        {heights.map((height, index) => (
          <FooterColumn key={index} height={height} />
        ))}
      </motion.div>
    </div>
  );
}

export function FooterColumn({ height }) {
  return (
    <motion.div style={{ height }} className={styles.footerColumn}></motion.div>
  );
}
