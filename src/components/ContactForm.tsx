import { useRef, useState } from "react";
import type { SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function sendEmail(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.current || status === "sending") return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_i35xu0a",
        "template_sttnubf",
        form.current,
        "QHlpLI6ej3-odnxSz",
      );
      form.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <span>What are you building?</span>
        <textarea name="message" rows={6} required />
      </label>
      <div className="form-footer">
        <p className={`form-status status-${status}`} aria-live="polite">
          {status === "success" && "Message sent. I’ll get back to you soon."}
          {status === "error" && "That didn’t send. Please try again in a moment."}
          {status === "sending" && "Sending…"}
        </p>
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
