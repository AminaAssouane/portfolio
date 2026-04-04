import styles from "./ThemeSwitcher.module.css";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.themeSwitcher}>
      <button
        className={`${styles.moon} ${theme === "dark" ? styles.active : ""}`}
        onClick={() => setTheme("dark")}
      >
        <Moon size={20} />
      </button>

      <button
        className={`${styles.sun} ${theme === "light" ? styles.active : ""}`}
        onClick={() => setTheme("light")}
      >
        <Sun size={20} />
      </button>
    </div>
  );
}
