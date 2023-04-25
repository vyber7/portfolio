import "../styles/about.css";
import ME from "../assets/about_me.jpg";
import { Link } from "react-scroll";

function About() {
  return (
    <section id="about">
      <div className="title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <h5>Get To Know Me</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="img" />
          </div>
        </div>
        <div className="about__content">
          <div>
            <p>
              I am a full stack developer with a passion for creating beautiful,
              responsive, and functional websites. I am a graduate of the
              International Science and Technology University with a Bachelor's
              Degree in Computer Science.
            </p>
            <p>
              I am a quick learner and I am always looking for new challenges. I
              am a team player and I am always willing to help others. I am a
              hard worker and I am always looking for ways to improve my skills.
            </p>
          </div>
          <Link to="contact" className="btn btn-primary">
            Send me a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
