import styles from "./NavBar.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function NavBar({ onAbout, onSkills, onProjects }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>{/* <ThemeSwitcher /> */}</div>
      <div className={styles.right}>
        <div onClick={onAbout}>About</div>
        <div onClick={onSkills}>Skills</div>
        <div onClick={onProjects}>Projects</div>
        <div>Contact</div>
      </div>
    </header>
  );
}
