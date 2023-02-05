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
  return (
    <nav>
      <Link
        to="header"
        onClick={() => setActive("#header")}
        className={active === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </Link>
      <Link
        to="services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDots />
      </Link>
    </nav>
  );
}

export default Nav;
