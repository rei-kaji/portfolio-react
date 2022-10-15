import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

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
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>12369ka@gmail.com</h5>
            <a href="mailto:12369ka@gmail.com" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>@rei_kaji0</h5>
            <a href="https://www.instagram.com/rei_kaji0/" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Rei Kajiwara</h5>
            <a href="https://www.linkedin.com/in/reikaji" target={"_blank"}>
              Send a message
            </a>
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
