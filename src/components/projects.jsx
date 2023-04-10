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
      <div className="title">
        <h5>My Recent Work</h5>
        <h2>
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
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>
          Projects
        </h2>
      </div>

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
