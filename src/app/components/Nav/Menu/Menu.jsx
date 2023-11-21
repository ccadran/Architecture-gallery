import styles from "./menu.module.scss";
import content from "../../../../content/content.json";

export default function Menu() {
  console.log(content.map((item) => item.genre));
  return (
    <div className={styles.menu}>
      <div className={styles.genres}>
        {content.map((item, index) => {
          return (
            <div className={styles.genre}>
              <div className={styles.text}>
                <p>( {index + 1} )</p>
                <h2>{item.genre}</h2>
              </div>
              <div className={styles.line}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
