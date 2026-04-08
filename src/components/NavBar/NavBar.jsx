import styles from "./NavBar.module.css";

export default function NavBar({ onAbout, onSkills, onProjects, onContact }) {
  return (
    <header className={styles.header}>
      <div onClick={onAbout}>About</div>
      <div onClick={onSkills}>Skills</div>
      <div onClick={onProjects}>Projects</div>
      <div onClick={onContact}>Contact</div>
    </header>
  );
}
