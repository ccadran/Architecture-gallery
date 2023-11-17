import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import content from "../../../content/content.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Content() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const itemContainersRef = useRef([]);

  useEffect(() => {
    console.log(itemContainersRef.current);
    // gsap.to(itemContainersRef.current, {
    //   opacity: 0,
    //   transform: "translateX(0%)",
    //   position: "sticky",
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     start: "top bottom",
    //     end: "20% top",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  }, []);

  return (
    <div ref={triggerRef} className={styles.contentContainer}>
      <div ref={sectionRef} className={styles.contentSlide}>
        {content.map((item, index) => (
          <div
            ref={(el) => (itemContainersRef.current[index] = el)}
            className={styles.itemContainer}
            style={{ backgroundColor: item.color }}
            key={index}
          >
            <div className={styles.contentItem}>
              <h2>{item.title}</h2>
              <p>{item.shortDescription}</p>
              <div className={styles.imgContainer}>
                <img src={item.src} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Test</h2>
    </div>
  );
}
