import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./description.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Description() {
  const descriptionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: descriptionRef,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0.9, 1], [50, 0]);

  const description = `Let's explore the diversity of architectural trends through five of them.
    "Blobism" embodies an organic, fluid approach, "High Tech" is the result of a fusion between technology and design, "Modernist" symbolizes minimalism in architecture, "Brutalism" adopts a robust, raw aesthetic, and "Metabolism" expresses a futuristic vision of architecture, based on the idea of organic, evolving structures.
    Let's scroll to discover an example of each of them !`;
  const descriptionSplit = description.split("");

  useLayoutEffect(() => {
    const descriptionTextSpans = document.querySelectorAll(
      `.${styles.descriptionText} span`
    );

    gsap.to(descriptionTextSpans, {
      opacity: 1,
      fontWeight: 700,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top top", // Adjust the start position as needed
        end: "65% bottom", // Adjust the end position as needed
        scrub: true, // Smooth scrolling effect
      },
    });
  }, [descriptionSplit]);

  return (
    <>
      <div ref={descriptionRef} className={styles.descriptionContainer}>
        <div className={styles.description}>
          <h2>L'architecture à travers 5 courants</h2>
          <p className={styles.descriptionText}>
            {descriptionSplit.map((child, index) => (
              <span key={index}>{child}</span>
            ))}
          </p>
        </div>
        <div className={styles.illustrations}>
          <div className={styles.images}>
            <div className={styles.imageContainer}>
              <img src="/assets/images/blobism.jpg" alt="illustration-1" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/assets/images/metabolism.jpg" alt="illustration-2" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/assets/images/modernist.jpg" alt="illustration-3" />
            </div>
          </div>
          {/* <div ref={imageFull} className={styles.imageFullContainer}>
            <img src="/assets/images/high-tech.jpg" alt="illustration-3" />
          </div> */}
        </div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </>
  );
}
