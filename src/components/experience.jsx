import "../styles/experience.css";
import { BsBookmarkCheckFill } from "react-icons/bs";

const data = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "Tailwind", "TypeScript", "React"],
  },
  {
    title: "Backend Development",
    skills: ["NodeJS", "NextJS", "Prisma", "MongoDB"],
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="title">
        <h2>My Experience</h2>
      </div>
      <div className="container experience__container">
        {data.map((item, index) => (
          <div className="experience__card" key={index}>
            <h3>{item.title}</h3>
            <div className="experience__content">
              {item.skills.map((skill, index) => (
                <div className="experience__details" key={index}>
                  <BsBookmarkCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
