import { useEffect, useRef, useState } from "react";
import type { SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const confirmationHeading = useRef<HTMLHeadingElement>(null);
  const previousStatus = useRef<Status>("idle");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "success") {
      confirmationHeading.current?.focus({ preventScroll: true });
    } else if (status === "idle" && previousStatus.current === "success") {
      const name = form.current?.elements.namedItem("name");
      if (name instanceof HTMLInputElement) name.focus({ preventScroll: true });
    }
    previousStatus.current = status;
  }, [status]);

  async function sendEmail(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.current || status === "sending" || status === "success") return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_851fca6",
        "template_57sq7w6",
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
    <div className="contact-form-slot">
      <form
        className={`contact-form${status === "success" ? " is-sent" : ""}`}
        ref={form}
        onSubmit={sendEmail}
        inert={status === "success"}
        aria-hidden={status === "success" ? true : undefined}
      >
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
          <span>How can I help?</span>
          <textarea name="message" rows={6} aria-describedby="message-hint" required />
        </label>
        <small id="message-hint">A website, a web app, maintenance, or a developer opportunity—tell me what you have in mind.</small>
        <div className="form-footer">
          <p className={`form-status status-${status}`} aria-live="polite">
            {status === "error" && "That didn’t send. Please try again in a moment."}
            {status === "sending" && "Sending…"}
          </p>
          <button className="button button-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>
      {status === "success" && (
        <section className="contact-confirmation" aria-labelledby="confirmation-title">
          <div className="confirmation-check" aria-hidden="true">✓</div>
          <h3
            id="confirmation-title"
            ref={confirmationHeading}
            tabIndex={-1}
            aria-describedby="confirmation-copy"
          >
            Message sent.
          </h3>
          <p id="confirmation-copy">
            Thanks for reaching out! I’ll read your message and get back to you soon.
          </p>
          <button className="button button-quiet" type="button" onClick={() => setStatus("idle")}>
            Send another message <span aria-hidden="true">↗</span>
          </button>
        </section>
      )}
    </div>
  );
}
