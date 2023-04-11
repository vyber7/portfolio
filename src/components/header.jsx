import "../styles/header.css";
import CTA from "./CTA";
import ME from "../assets/me.png";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiCodepen } from "react-icons/si";

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="intro">
          <h5>Hello, I am</h5>
          <h1>Vitaliy Bernatskyy</h1>
          <h5>Fullstack Developer</h5>
          <CTA />
        </div>
        <div className="me_socials">
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <div className="header__socials">
            <a
              href="https://github.com/vyber7"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub />
            </a>
            <a
              href="https://codepen.io/vyber7"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodepen />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
