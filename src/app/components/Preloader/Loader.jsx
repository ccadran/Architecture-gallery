"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { imageDown } from "./anim";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

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

  useLayoutEffect(() => {
    const timelineImage = gsap.timeline({
      defaults: { delay: 0, ease: "power3.inOut" },
    });

    timelineImage.to(imageRefs.current[0], {
      top: "50vh",
      transform: "translateY(-50%)",
    });
    timelineImage.to(
      imageRefs.current[1],
      { top: "50vh", transform: "translateY(-50%)" },
      0.25
    );
    timelineImage.to(
      imageRefs.current[2],
      { top: "50vh", transform: "translateY(-50%)" },
      0.5
    );
    timelineImage.to(
      imageRefs.current[3],
      { top: "50vh", transform: "translateY(-50%)" },
      0.75
    );
    timelineImage.to(
      imageRefs.current[4],
      { top: "50vh", transform: "translateY(-50%)" },
      1
    );
    timelineImage.to(imageRefs.current, {
      top: "30vh",
      transform: "rotate(-20deg)",
    });

    const timelineContainerImage = gsap.timeline();

    timelineContainerImage.to(imageContainer.current, { x: "150%" }, 2);
  });

  return (
    <div className={styles.loader}>
      <h1>Architecture</h1>
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
