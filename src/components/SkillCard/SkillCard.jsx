import styles from "./SkillCard.module.css";

export default function SkillCard({ name, icon }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={name} className={styles.icon} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
