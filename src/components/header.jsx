import "../styles/header.css";
import CTA from "./CTA";
import ME from "../assets/me.jpg";
import { SiGithub } from "react-icons/si";
import { SiCodepen } from "react-icons/si";

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="intro">
          <h5>Hello, I am</h5>
          <h1>Vitaliy Bernatskyy</h1>
          <h5>Web Developer</h5>
          <p className="moto">
            {" "}
            I build beautiful, responsive, and functional websites and web
            applications, from inception to production.
          </p>
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
