import styles from "./ProjectCard.module.css";
import useInView from "../../hooks/useInView";

export default function ProjectCard({
  title,
  description,
  align,
  color,
  desktopImg,
  phoneImg,
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles[align]}`}
      data-visible={inView}
      style={{ background: color }}
    >
      <div className={styles.textSide}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
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
