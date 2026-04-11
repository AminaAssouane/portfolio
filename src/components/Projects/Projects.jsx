import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1>
        Featured{" "}
        <span className="shine-wrap inline-block" data-text="Projects">
          Projects
        </span>
      </h1>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            align={project.align}
            color={project.color}
            desktopImg={project.desktopImg}
            phoneImg={project.phoneImg}
            liveDemoLink={project.liveDemoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
