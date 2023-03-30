import "../styles/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-scroll";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

function Nav() {
  const [active, setActive] = useState("#header");

  // Hide navbar on scroll down and show on scroll up
  // Only works on desktop
  let screenWidth = window.innerWidth;

  if (screenWidth > 1024) {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.querySelector("nav").classList.remove("hidden");
      } else {
        document.querySelector("nav").classList.add("hidden");
      }
      prevScrollPos = currentScrollPos;
    };
  }

  return (
    <nav id="nav">
      <div className="container nav__container">
        <Link
          to="header"
          onClick={() => setActive("#header")}
          className={active === "#header" ? "active" : ""}
        >
          <AiOutlineHome /> <span>Home</span>
        </Link>
        <Link
          to="about"
          onClick={() => setActive("#about")}
          className={active === "#about" ? "active" : ""}
        >
          <AiOutlineUser /> <span>About</span>
        </Link>
        <Link
          to="experience"
          onClick={() => setActive("#experience")}
          className={active === "#experience" ? "active" : ""}
        >
          <BiBook /> <span>Experience</span>
        </Link>
        <Link
          to="projects"
          onClick={() => setActive("#projects")}
          className={active === "#projects" ? "active" : ""}
        >
          <RiServiceLine /> <span>Projects</span>
        </Link>
        <Link
          to="contact"
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDots /> <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
