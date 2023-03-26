import "../styles/experience.css";
import { BsBookmarkCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__card">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="experience__card">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>NextJS</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
