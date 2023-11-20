import projects from "../../../content/content.json";
import Card from "./Card/Card";
import styles from "./content.module.scss";

export default function Content() {
  return (
    <div className={styles.content}>
      {projects.map((project, index) => {
        return <Card key={index} {...project} />;
      })}
    </div>
  );
}
