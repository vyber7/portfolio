import CV from "../assets/cv.png";
import { Link } from "react-scroll";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <Link to="contact" className="btn btn-primary">
        Messege me
      </Link>
    </div>
  );
}

export default CTA;
