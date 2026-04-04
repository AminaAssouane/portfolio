import styles from "./Skills.module.css";
import SkillCard from "../SkillCard/SkillCard";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <h1>
        My{" "}
        <span className="shine-wrap" data-text="Skills">
          Skills
        </span>
      </h1>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
