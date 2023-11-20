import { useEffect, useRef } from "react";
import projects from "../../../content/content.json";
import Card from "./Card/Card";
import styles from "./content.module.scss";
import { motion, useScroll } from "framer-motion";

export default function Content() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className={styles.content}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={i}
            i={i}
            {...project}
            range={[i * 0.2, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}
