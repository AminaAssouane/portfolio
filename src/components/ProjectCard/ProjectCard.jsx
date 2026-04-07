import styles from "./ProjectCard.module.css";
import useInView from "../../hooks/useInView";
import globe from "../../assets/icons/globe.svg";
import github from "../../assets/icons/github.svg";

export default function ProjectCard({
  title,
  description,
  align,
  color,
  desktopImg,
  phoneImg,
  liveDemoLink,
  githubLink,
}) {
  const { ref, inView } = useInView();
  console.log(title, liveDemoLink, githubLink);
  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles[align]}`}
      data-visible={inView}
      style={{ background: color }}
    >
      <div className={styles.textSide}>
        <a href={liveDemoLink} className={styles.title} target="_blank">
          {title}
        </a>
        <div className={styles.description}>{description}</div>
        <div className={styles.buttons}>
          <a href={liveDemoLink} className={styles.liveDemoBtn} target="_blank">
            <img src={globe} alt="globe" className={styles.liveDemoIcon} />{" "}
            <span className={styles.liveDemoName}>Live demo</span>
          </a>
          <a href={githubLink} className={styles.githubBtn} target="_blank">
            <img src={github} alt="github" className={styles.githubIcon} />{" "}
            <span className={styles.githubName}>GitHub</span>
          </a>
        </div>
      </div>
      <div className={styles.deviceMockup}>
        <img
          src={desktopImg}
          alt={`${title} desktop`}
          className={styles.desktopImg}
        />
        <img
          src={phoneImg}
          alt={`${title} mobile`}
          className={styles.phoneImg}
        />
      </div>
    </div>
  );
}
