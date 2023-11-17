import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import content from "../../../content/content.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Content() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "5000 end",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div ref={triggerRef} className={styles.contentContainer}>
      <div ref={sectionRef} className={styles.contentSlide}>
        <div className={styles.intro}>
          <h1>Discover architectures</h1>
        </div>
        {content.map((item, index) => {
          return (
            <div
              className={styles.itemContainer}
              style={{ backgroundColor: item.color }}
            >
              <div className={styles.contentItem} key={index}>
                <h2>{item.title}</h2>
                <p>{item.shortDescription}</p>
                <div className={styles.imgContainer}>
                  <img src={item.src} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Test</h2>
    </div>
  );
}
