import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

const SERVICE_ID = "service_1ymvn8c";
const TEMPLATE_ID = "template_n41q6zh";
const PUBLIC_KEY = "9E0tWfDKtfXR2IWfc";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className={styles.contact}>
      <h1 className="shine-wrap" data-text="Contact">
        Contact
      </h1>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div>Email : </div>
          <div>minassouane@gmail.com</div>
          <div>Phone number : </div>
          <div>+213 697 23 66 67</div>
          <div>Location : </div>
          <div>Algiers, Algeria</div>
        </div>
        <div id="contact" className={styles.contactForm}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact__form"
            noValidate
          >
            <div className="contact__field">
              <label className="contact__label-field">Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__field">
              <label className="contact__label-field">Email</label>
              <input
                type="email"
                name="reply_to"
                placeholder="your@email.com"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__field">
              <label className="contact__label-field">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project…"
                required
                rows={5}
                className="contact__textarea"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`contact__button ${status === "sending" ? "contact__button--sending" : ""}`}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>

          {status === "success" && (
            <div className="contact__feedback contact__feedback--success">
              Message sent! I'll be in touch soon.
            </div>
          )}
          {status === "error" && (
            <div className="contact__feedback contact__feedback--error">
              Something went wrong. Please try again or email me directly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
