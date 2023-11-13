import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./style.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Description() {
  const descriptionRef = useRef(null);

  const description =
    "Lorem ipsum dolor sit amet consectetur. Tristique porta mauris at duis bibendum purus nisl aliquet ullamcorper. Scelerisque eget lectus justo nibh libero ultricies scelerisque lectus blandit. Nulla fringilla tincidunt diam malesuada dui. Tellus phasellus id sit pharetra eget. Odio imperdiet nullam eget vel laoreet aliquam tellus.";
  const descriptionSplit = description.split("");

  useLayoutEffect(() => {
    const descriptionTextSpans = document.querySelectorAll(
      `.${styles.descriptionText} span`
    );

    // Initial state (hide spans)
    // gsap.set(descriptionTextSpans, { opacity: 0 });

    gsap.to(descriptionTextSpans, {
      opacity: 1,
      fontWeight: 700,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top top", // Adjust the start position as needed
        end: "bottom bottom", // Adjust the end position as needed
        scrub: true, // Smooth scrolling effect
      },
    });
  }, [descriptionSplit]);

  return (
    <div ref={descriptionRef} className={styles.descriptionContainer}>
      <div className={styles.description}>
        <h2>L'architecture à travers 5 courants</h2>
        <p className={styles.descriptionText}>
          {descriptionSplit.map((child, index) => (
            <span key={index}>{child}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
