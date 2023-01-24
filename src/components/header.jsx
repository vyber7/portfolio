import "../styles/header.css";
import CTA from "./CTA";
import ME from "../assets/me.jpg";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Header() {
  return (
    <header id="header">
      <h5>Hello, I am</h5>
      <h1>Vitaliy Bernatskyy</h1>
      <h5>Fullstack Developer</h5>
      <CTA />
      <img
        src={ME}
        alt="me"
        width={300}
        style={{ borderRadius: 200, marginTop: 7 * 16 }}
      />
      <div className="header__socials">
        <a href="https://github.com/vyber7">
          <SiGithub />
        </a>
        <a href="https://linkedin.com/">
          <SiLinkedin />
        </a>
      </div>
    </header>
  );
}

export default Header;
