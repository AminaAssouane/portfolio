import styles from "./Hero.module.css";
import image from "../../assets/images/Photo.png";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <section className={styles.image}>
        <img src={image} alt="" />
      </section>
      <section className={styles.about}>
        <h1>
          Hi, I'm{" "}
          <span className="shine-wrap" data-text="Amina Assouane">
            Amina Assouane
          </span>
        </h1>

        <h2>Full-Stack Developer</h2>

        <p>
          I build modern web applications with technologies such as{" "}
          <span>React</span>, <span>Node.js</span>, and <span>PostgreSQL</span>.
        </p>

        <p>
          I'm a <span>Computer Science graduate</span> from{" "}
          <span>Paris Diderot University</span>, with hands-on experience from{" "}
          <span>The Odin Project</span>.
        </p>
      </section>
    </div>
  );
}
