import styles from "./style.module.scss";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <h4 className={styles.menu}>( Menu )</h4>
      <div className={styles.credit}>
        <div className={styles.copyright}>@</div>
        <div className={styles.name}>
          <p className={styles.codeBy}>Code By</p>
          <p className={styles.clario}>Clario</p>
          <p className={styles.cadran}>Cadran</p>
        </div>
      </div>
    </div>
  );
}
