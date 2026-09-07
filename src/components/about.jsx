import "../styles/about.css";
//import ME from "../assets/about_me.jpg";
import { Link } from "react-scroll";

function About() {
  return (
    <section id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="img" />
          </div>
        </div> */}
        <div className="about__content">
          <div>
            <p>
              I am a Web Developer with a passion for creating beautiful
              interfaces and experiences. I love to code things from scratch,
              and enjoy bringing ideas to life. I am a graduate of the
              International Science and Technology University with a Bachelor's
              Degree in Computer Science.
            </p>
            <p>
              I am a quick learner and I am always looking for new challenges. I
              am a team player and I am always willing to help others. I am a
              hard worker and I am always looking for ways to improve my skills.
              I am certain I can deliver value to you and your team.
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
