import "../styles/header.css";
import CTA from "./CTA";
import ME from "../assets/me.png";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Vitaliy Bernatskyy</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="header__socials">
          <a href="https://github.com/vyber7">
            <SiGithub />
          </a>
          <a href="https://linkedin.com/">
            <SiLinkedin />
          </a>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
