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

  const imageFull = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionRef.current,
        scrub: true,
        start: "80% top",
        end: "bottom+=100px bottom",
        markers: true,
      },
    });

    timeline.fromTo(
      imageFull.current,
      {
        clipPath: "inset(15%)",
      },
      { ease: "power3.in", duration: 3, clipPath: "inset(0%)" }
    );
  }, []);

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
        <div ref={imageFull} className={styles.imageFullContainer}>
          <img src="/assets/images/high-tech.jpg" alt="illustration-3" />
        </div>
      </div>
    </div>
  );
}
