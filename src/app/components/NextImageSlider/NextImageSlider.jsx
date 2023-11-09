import styles from "./style.module.scss";

export default function NextImageSlider({ content }) {
  return (
    <div className={styles.nextImageSlider}>
      {content.map((item, index) => {
        return (
          <div className={styles.nextImageContainer}>
            <img src={item.src} className={styles.nextImage} />
          </div>
        );
      })}
    </div>
  );
}
