import "../styles/about.css";
import ME from "../assets/about-me.jpg";

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
            I am a full stack developer with a passion for creating beautiful,
            responsive, and functional websites. I am a graduate of the
            International Science and Technology University with a Bachelor's
            Degree in Computer Science. I am always looking to learn new
            technologies and improve my skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          {/*<a href="https://www.freecodecamp.org/certification/vyber7/responsive-web-design">
            Resposive Web Design
          </a>
          <a href="https://www.freecodecamp.org/certification/vyber7/javascript-algorithms-and-data-structures">
            JavaScript Algorithms and Data Structures
          </a>
          <a href="https://www.freecodecamp.org/certification/vyber7/front-end-development-libraries">
            Front End Development Libraries
          </a>
          <a href="https://www.freecodecamp.org/certification/vyber7/data-visualization">
            Data Visualization
          </a>
          <a href="https://www.freecodecamp.org/certification/vyber7/back-end-development-and-apis">
            Back End Development and APIs
          </a>*/}
        </div>
        <div>
          <h2>Certifications</h2>
          <a href="https://www.freecodecamp.org/certification/vyber7/responsive-web-design">
            Resposive Web Design
          </a>
          <a href="https://www.freecodecamp.org/certification/vyber7/javascript-algorithms-and-data-structures">
            JavaScript Algorithms and Data Structures
          </a>
          <a href="https://www.freecodecamp.org/certification/vyber7/front-end-development-libraries">
            Front End Development Libraries
          </a>
          <a href="https://www.freecodecamp.org/certification/vyber7/data-visualization">
            Data Visualization
          </a>
          <a href="https://www.freecodecamp.org/certification/vyber7/back-end-development-and-apis">
            Back End Development and APIs
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
