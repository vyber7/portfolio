import "../styles/nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-scroll";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  return (
    <nav>
      <Link to="header">
        <AiOutlineHome />
      </Link>
      <Link to="about">
        <AiOutlineUser />
      </Link>
      <Link to="experience">
        <BiBook />
      </Link>
      <Link to="services">
        <RiServiceLine />
      </Link>
      <Link to="contact">
        <BiMessageSquareDots />
      </Link>
    </nav>
  );
}

export default Nav;
