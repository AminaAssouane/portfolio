import styles from "./NavBar.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <ThemeSwitcher />
      </div>
      <div className={styles.right}>
        <div>About</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </header>
  );
}
