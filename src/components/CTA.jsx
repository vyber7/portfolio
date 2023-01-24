import CV from "../assets/cv.png";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download>
        Download CV
      </a>
      <a href="#contact">Messege me</a>
    </div>
  );
}

export default CTA;
