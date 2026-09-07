import "../styles/projects.css";
import Calculator from "../assets/calculator.png";
import DrumMachine from "../assets/drum_machine.png";
import Clock from "../assets/25_plus_5_clock.png";
import HeatMap from "../assets/heat_map.png";
import TreeMap from "../assets/tree_map.png";
import RandomQuotes from "../assets/random_quotes.png";
import CarAuctions from "../assets/car_auctions.png";
import { FaReact } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
} from "react-icons/tb";
import { BsCloudArrowUp } from "react-icons/bs";
import { BsShield } from "react-icons/bs";
import { SiGithub, SiPusher } from "react-icons/si";

const data = [
  // {
  //   title: "Car Auctions",
  //   img: CarAuctions,
  //   demo: "https://car-auctions-steel.vercel.app/",
  // },
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
        <h2>Projects</h2>
      </div>

      <div className="container projects__container">
        <article
          className="projects__item projects__car-auctions"
          key="car-auctions"
        >
          <div className="projects__item-img overlay car-auctions-img">
            <img src={CarAuctions} alt="img"></img>
          </div>
          <div className="car-auctions-tech">
            <h2>Car Auctions</h2>
            <div className="description">
              <p>
                A modern, real-time car auction platform built with Next.js,
                TypeScript, MongoDB, and Pusher for live updates.
              </p>
              <p>
                Users can browse, bid, comment, and sell vehicles in real-time
                auctions with live countdown timers.
              </p>
              <p>
                Features include secure authentication with NextAuth, image
                uploads via Cloudinary, and a responsive design using Tailwind
                CSS.
              </p>
            </div>
            <h2>Tech Used</h2>
            <div className="car-auctions-tech-used">
              <ul>
                <div className="tech-used">
                  <FaReact className="tech-used-icon" />
                  <div>
                    <h4>React</h4>
                  </div>
                </div>
                <div className="tech-used">
                  <TbBrandNextjs className="tech-used-icon" />
                  <div>
                    <h4>Nextjs</h4>
                  </div>
                </div>
                <div className="tech-used">
                  <TbBrandTypescript className="tech-used-icon" />
                  <div>
                    <h4>TypeScript</h4>
                  </div>
                </div>
                <div className="tech-used">
                  <TbBrandTailwind className="tech-used-icon" />
                  <div>
                    <h4>Tailwind</h4>
                  </div>
                </div>
              </ul>
              <ul>
                <div className="tech-used">
                  <TbBrandMongodb className="tech-used-icon" />
                  <div>
                    <h4>MongoDB</h4>
                  </div>
                </div>
                <div className="tech-used">
                  <BsShield className="tech-used-icon" />
                  <div>
                    <h4>NextAuth</h4>
                  </div>
                </div>
                <div className="tech-used">
                  <BsCloudArrowUp className="tech-used-icon" />
                  <div>
                    <h4>Cloudinary</h4>
                  </div>
                </div>
                <div className="tech-used">
                  <SiPusher className="tech-used-icon" />
                  <div>
                    <h4>Pusher</h4>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className="car-auctions-title">
            <a
              href="https://car-auctions-steel.vercel.app/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
            <a
              href="https://github.com/vyber7/car-auctions/"
              className="btn projects__github-link"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub className="github-icon" /> <span>GitHub</span>
            </a>
          </div>
        </article>
        {data.map((item, i) => {
          return (
            <article className="projects__item" key={i}>
              <div className="projects__item-img overlay">
                <img src={item.img} alt="img"></img>
              </div>
              <h3>{item.title}</h3>
              <a
                href={item.demo}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
