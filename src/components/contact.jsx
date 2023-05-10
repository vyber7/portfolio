import "../styles/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i35xu0a",
        "template_sttnubf",
        form.current,
        "QHlpLI6ej3-odnxSz"
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

    //create a function to display a message when the form is submitted
    const message = document.querySelector(".message");

    message.innerHTML = "I will get back to you soon. Thank you!";
    message.classList.add("success");

    setTimeout(() => {
      message.classList.remove("success");
    }, 5000);
  };

  return (
    <section id="contact">
      <div className="title">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="message">I will get back to you soon. Thank you!</div>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="7"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
