import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lt8k7gy",
        "from_portfolio",
        form.current,
        "vbkwq7M9e__UoeUOu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Success sent your message!");
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>12369ka@gmail.com</h5>
            <p>copy email adress</p>
            <CopyToClipboard
              className="a_link"
              text={"12369ka@gmail.com"}
              onCopy={() => alert(`Copied email adress!`)}
            >
              <p></p>
            </CopyToClipboard>
          </article>
          <article className="contact_option">
            <BsGithub className="contact_option-icon" />
            <h4>Github</h4>
            <h5>rei-kaji</h5>
            <p>open my profile</p>
            <a
              href="https://github.com/rei-kaji"
              target={"_blank"}
              rel="noreferrer"
              className="a_link"
            ></a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Rei Kajiwara</h5>
            <p>open my profile</p>
            <a
              href="https://www.linkedin.com/in/reikaji"
              target={"_blank"}
              rel="noreferrer"
              className="a_link"
            ></a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
