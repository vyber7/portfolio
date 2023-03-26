import "../styles/about.css";
import ME from "../assets/about_me.jpg";
import { Link } from "react-scroll";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="img" />
          </div>
        </div>
        <div className="about__content">
          <p>
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
          </p>
          <Link to="contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
