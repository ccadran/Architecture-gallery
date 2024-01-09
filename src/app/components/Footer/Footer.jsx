import { useEffect, useRef } from "react";
import styles from "./footer.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import content from "../../../content/content.json";
import TextHover from "../TextHover/TextHover";
import gsap from "gsap";

const calculateHeights = (scrollYProgress, numColumns) => {
  return [...Array(numColumns)].map((_, index) =>
    useTransform(scrollYProgress, [0, 1], [`${100 + index * 25}vh`, "0vh"])
  );
};

export default function Footer() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end end"],
  });

  const numColumns = 10;

  const heights = calculateHeights(scrollYProgress, numColumns);

  window.addEventListener("scroll", () => {
    console.log(scrollYProgress.current);

    if (scrollYProgress.current > 0.95) {
      gsap.set(`.${styles.footerColumnContainer} `, { zIndex: 1 });
    } else if (scrollYProgress.current < 0.95) {
      gsap.set(`.${styles.footerColumnContainer} `, { zIndex: 3 });
    }
  });

  return (
    <div ref={container} className={styles.footerContainer} id="#footer">
      <div className={styles.footer}>
        <div className={styles.credits}>
          {content.map((item, index) => {
            return (
              <div className={styles.credit} key={index}>
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
            <a href="https://github.com/ccadran">
              <TextHover text="Linkedin" />
            </a>
            <a href="https://github.com/ccadran">
              {" "}
              <TextHover text="GitHub" />
            </a>
            <a href="https://github.com/ccadran">
              {" "}
              <TextHover text="Instagram" />
            </a>
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
