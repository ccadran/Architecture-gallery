import styles from "./menu.module.scss";
import content from "../../../../content/content.json";
import { motion } from "framer-motion";
import { menuSlide, textSlide, lineAnim } from "./anim";
import Link from "next/link";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Menu({}) {
  // console.log(content.map((item) => item.genre));
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.genres}>
        {content.map((item, index) => {
          const isLastItem = index === content.length - 1;

          return (
            <div className={styles.genre} key={index}>
              <motion.div
                variants={textSlide}
                animate="enter"
                exit="exit"
                initial="initial"
                custom={index + 1}
                className={styles.text}
                onMouseEnter={() => {
                  setModal({ active: true, index: index });
                }}
                onMouseLeave={() => {
                  setModal({ active: false, index: index });
                }}
              >
                <p>( {index + 1} )</p>
                <h2>{item.genre}</h2>
                {/* <Link href="#footer">Link to scroll</Link> */}
              </motion.div>

              {!isLastItem && (
                <motion.div
                  custom={index + 1}
                  variants={lineAnim}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                  className={styles.line}
                ></motion.div>
              )}
            </div>
          );
        })}
      </div>

      <Modal modal={modal} projects={content} />
    </motion.div>
  );
}
