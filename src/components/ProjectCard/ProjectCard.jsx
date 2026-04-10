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
    <div ref={ref} class="" data-visible={inView} style={{ background: color }}>
      <div class="">
        <a href={liveDemoLink} class="" target="_blank">
          {title}
        </a>
        <div class="">{description}</div>
        <div class="">
          <a href={liveDemoLink} class="" target="_blank">
            <img src={globe} alt="globe" clas="" />{" "}
            <span class="">Live demo</span>
          </a>
          <a href={githubLink} class="" target="_blank">
            <img src={github} alt="github" class="" />{" "}
            <span class="">GitHub</span>
          </a>
        </div>
      </div>
      <div class="">
        <img src={desktopImg} alt={`${title} desktop`} class="" />
        <img src={phoneImg} alt={`${title} mobile`} class="" />
      </div>
    </div>
  );
}
