import { useEffect, useState } from "react";
import styles from "./nav.module.scss";
import Menu from "./Menu/Menu";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./Menu/anim";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    
      // Always hide overflow-x
      document.body.style.overflowX = "hidden";
  
      // Disable scrolling for the entire body only when the menu is open
      document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
    
  
  
  }, [isMenuOpen]);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("open");
  };

  return (
    <div className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
      <h4 className={styles.menuOpener} onClick={() => toggleMenu()}>
        ( Menu )
      </h4>

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
