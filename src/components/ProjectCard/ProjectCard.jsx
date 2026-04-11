import useInView from "../../hooks/useInView";
import globe from "../../assets/icons/globe.svg";
import github from "../../assets/icons/github.svg";
import "./ProjectCard.css";

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

  return (
    <div
      ref={ref}
      style={{ background: color }}
      className={`
        flex justify-between gap-20 rounded-[14px] p-20 leading-relaxed
        ${align === "left" ? "flex-row-reverse" : ""}
        max-sm:flex-col max-sm:p-8 max-sm:gap-8
      `}
    >
      <div>
        <a
          href={liveDemoLink}
          target="_blank"
          className="inline-block text-[3rem] mb-8 cursor-pointer
                     max-sm:text-[2.8rem] max-sm:mb-4"
        >
          {title}
        </a>

        <div>{description}</div>

        <div className="flex gap-4 mt-8 text-sm">
          <a
            href={liveDemoLink}
            target="_blank"
            className="flex items-center gap-1 px-4 py-2 rounded-full
                       bg-black text-white border-2 border-black"
          >
            <img src={globe} className="h-6 w-auto invert" />
            <span>Live demo</span>
          </a>

          <a
            href={githubLink}
            target="_blank"
            className="flex items-center gap-1 px-4 py-2 rounded-full
                       border-2 border-black text-black"
          >
            <img src={github} className="h-6 w-auto" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="relative flex items-end shrink-0">
        <img
          data-visible={inView}
          src={desktopImg}
          alt={`${title} desktop`}
          className={` 
            opacity-0
            h-80 w-auto object-contain
    ${inView ? "animate-appear-up" : ""}
            max-sm:h-52
          `}
        />

        <img
          data-visible={inView}
          src={phoneImg}
          alt={`${title} mobile`}
          className={` 
            opacity-0
            h-72 absolute bottom-[-1.2rem]
            ${align === "left" ? "right-0" : "left-0"}
    ${inView ? "animate-appear-down" : ""}
            max-sm:h-40
          `}
        />
      </div>
    </div>
  );
}
