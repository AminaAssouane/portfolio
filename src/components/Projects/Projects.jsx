import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1>
        Featured{" "}
        <span className="shine-wrap" data-text="Projects">
          Projects
        </span>
      </h1>
    </div>
  );
}
