"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { imageDown } from "./anim";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = [
  "/assets/images/blobism.jpg",
  "/assets/images/brutalism.jpg",
  "/assets/images/high-tech.jpg",
  "/assets/images/metabolism.jpg",
  "/assets/images/modernist.jpg",
];

export default function Loader() {
  const imageRefs = useRef([]);
  const imageContainer = useRef();
  const container = useRef();
  const h1 = useRef();

  useLayoutEffect(() => {
    const timelineLoading = gsap.timeline({
      defaults: { delay: 0, ease: "power3.inOut" },
    });

    timelineLoading.to(imageRefs.current[0], {
      top: "50vh",
      transform: "translateY(-50%)",
    });
    timelineLoading.to(
      imageRefs.current[1],
      { top: "50vh", transform: "translateY(-50%)" },
      0.25
    );
    timelineLoading.to(
      imageRefs.current[2],
      { top: "50vh", transform: "translateY(-50%)" },
      0.5
    );
    timelineLoading.to(
      imageRefs.current[3],
      { top: "50vh", transform: "translateY(-50%)" },
      0.75
    );
    timelineLoading.to(
      imageRefs.current[4],
      { top: "50vh", transform: "translateY(-50%)" },
      1
    );
    timelineLoading.to(
      imageRefs.current,
      {
        top: "30vh",
        transform: "rotate(-20deg)",
      },
      1.5
    );
    timelineLoading.to(
      imageContainer.current,
      { x: "150%", duration: 1, ease: "power3.inOut" },
      1.8
    );
    timelineLoading.to(
      h1.current,
      {
        opacity: 0,
      },
      2.6
    );
    gsap.to(
      container.current,
      {
        maskImage:
          " radial-gradient(circle,transparent 0%,transparent 100%,black 100%)",
      },
      3
    );
  });

  return (
    <div className={styles.loader} ref={container}>
      <h1 ref={h1}>Architecture</h1>
      <div className={styles.imageContainer} ref={imageContainer}>
        {images.map((image, index) => (
          <Image
            src={image}
            className={styles.image}
            width={200}
            height={300}
            objectFit="cover"
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
}
