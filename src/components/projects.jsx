import "../styles/projects.css";
import Calculator from "../assets/calculator.png";
import DrumMachine from "../assets/drum_machine.png";
import Clock from "../assets/25_plus_5_clock.png";
import HeatMap from "../assets/heat_map.png";
import TreeMap from "../assets/tree_map.png";
import RandomQuotes from "../assets/random_quotes.png";

const data = [
  {
    title: "Calculator",
    img: Calculator,
    demo: "https://codepen.io/vyber7/full/ExVyQeN",
  },
  {
    title: "Drum Machine",
    img: DrumMachine,
    demo: "https://codepen.io/vyber7/full/wvKKjox",
  },
  {
    title: "25 + 5 Clock",
    img: Clock,
    demo: "https://codepen.io/vyber7/full/QWjqZMX",
  },
  {
    title: "Heat Map",
    img: HeatMap,
    demo: "https://codepen.io/vyber7/full/xxZjBVr",
  },
  {
    title: "Tree Map",
    img: TreeMap,
    demo: "https://codepen.io/vyber7/full/qBZjRyg",
  },
  {
    title: "Random Quotes",
    img: RandomQuotes,
    demo: "https://codepen.io/vyber7/full/VwLOGze",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {data.map((item) => {
          return (
            <article className="projects__item">
              <div className="projects__item-img">
                <img src={item.img} alt="img"></img>
              </div>
              <h3>{item.title}</h3>
              <a
                href={item.demo}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
