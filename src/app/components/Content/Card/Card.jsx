import styles from "./card.module.scss";
export default function Card({ src, title, shortDescription, color }) {
  return (
    <div className={styles.cardContainer}>
      <div style={{ backgroundColor: color }} className={styles.card}>
        <h2>{title}</h2>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
}
