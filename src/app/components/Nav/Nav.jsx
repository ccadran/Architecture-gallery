import { useState } from "react";
import styles from "./nav.module.scss";
import Menu from "./Menu/Menu";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./Menu/anim";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("open");
  };
  return (
    <div className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
      <h4 className={styles.menuOpener} onClick={() => toggleMenu()}>
        ( Menu )
      </h4>
      <div className={styles.credit}>
        <div className={styles.copyright}>@</div>
        <div className={styles.name}>
          <p className={styles.codeBy}>Code By</p>
          <p className={styles.clario}>Clario</p>
          <p className={styles.cadran}>Cadran</p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className={styles.close}
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="/assets/icons/close.svg" alt="" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">{isMenuOpen && <Menu />}</AnimatePresence>
    </div>
  );
}
