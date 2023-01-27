import CV from "../assets/cv.png";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Messege me
      </a>
    </div>
  );
}

export default CTA;
