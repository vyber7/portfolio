import CV from "../assets/cv.pdf";
import { Link } from "react-scroll";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} rel="noopener noreferrer" target="_blank" className="btn">
        View CV
      </a>

      <Link to="contact" className="btn btn-primary">
        Message me
      </Link>
    </div>
  );
}

export default CTA;
