import styles from "./Hero.module.css";
import image from "../../assets/images/Photo.jpg";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <section className={styles.image}>
        <img src={image} alt="" />
      </section>
      <section className={styles.about}>
        <h1>Hi, I'm Amina Assouane</h1>

        <h2>Full-Stack Developer</h2>

        <p>
          I build modern, functional, and user-focused web applications using
          technologies like React, Node.js, and Javascript.
        </p>

        <p>
          With a <span>Computer Science degree</span> from{" "}
          <span>Paris Diderot University</span> and hands-on experience from{" "}
          <span>The Odin Project</span>, I’m passionate about turning ideas into
          real-world products.
        </p>
      </section>
    </div>
  );
}
