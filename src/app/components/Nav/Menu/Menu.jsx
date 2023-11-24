import styles from "./menu.module.scss";
import content from "../../../../content/content.json";
import { motion } from "framer-motion";
import { menuSlide, textSlide, lineAnim } from "./anim";

export default function Menu({}) {
  console.log(content.map((item) => item.genre));
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
          return (
            <div className={styles.genre}>
              <motion.div
                variants={textSlide}
                animate="enter"
                exit="exit"
                initial="initial"
                custom={index + 1}
                className={styles.text}
              >
                <p>( {index + 1} )</p>
                <h2>{item.genre}</h2>
              </motion.div>
              <motion.div
                custom={index + 1}
                variants={lineAnim}
                animate="enter"
                exit="exit"
                initial="initial"
                className={styles.line}
              ></motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
