import "../styles/footer.css";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiCodepen } from "react-icons/si";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="footer">
      <p className="footer__logo">VB</p>

      <ul className="permalinks">
        <li>
          <Link to="header">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="experience">Experience</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/vyber7" target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
        <a href="https://codepen.io/vyber7" target="_blank" rel="noreferrer">
          <SiCodepen />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <SiLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vitaliy Bernatskyy. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
