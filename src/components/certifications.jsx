import React from "react";
import "../styles/certifications.css";
import ResponsiveWebDesign from "../assets/responsive_web_design.png";
import JSAlgorithmsAndDataStructures from "../assets/js_algorithms_and_data_structures.png";
import FrontEndDevelopmentLibraries from "../assets/front_end_development_libraries.png";
import DataVisualization from "../assets/data_visualization.png";
import BackEndDevelopmentAndAPIs from "../assets/back_end_development_and_apis.png";
import { register } from "swiper/element/bundle";
//import Swiper from "swiper/bundle";
register();

const data = [
  {
    title: "Responsive Web Design",
    img: ResponsiveWebDesign,
    demo: "https://www.freecodecamp.org/certification/vyber7/responsive-web-design",
  },
  {
    title: "JS Algorithms and Data Structures",
    img: JSAlgorithmsAndDataStructures,
    demo: "https://www.freecodecamp.org/certification/vyber7/javascript-algorithms-and-data-structures",
  },
  {
    title: "Front End Development Libraries",
    img: FrontEndDevelopmentLibraries,
    demo: "https://www.freecodecamp.org/certification/vyber7/front-end-development-libraries",
  },
  {
    title: "Data Visualization",
    img: DataVisualization,
    demo: "https://www.freecodecamp.org/certification/vyber7/data-visualization",
  },
  {
    title: "Back End Development and APIs",
    img: BackEndDevelopmentAndAPIs,
    demo: "https://www.freecodecamp.org/certification/vyber7/back-end-development-and-apis",
  },
];

function Certs() {
  return (
    <section id="certifications">
      <h5>My Certifications</h5>
      <h2>Certifications</h2>

      <swiper-container
        pagination="true"
        slides-per-view="1"
        speed="400"
        space-between="100"
        loop="true"
        autoplay="true"
        disable-on-interaction="false"
        class="container certifications__container"
      >
        {data.map((item) => {
          return (
            <swiper-slide class="certifications__item">
              <img src={item.img} alt="img"></img>
              <a href={item.demo} target="_blank" rel="noreferrer">
                <h3>{item.title}</h3>
              </a>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </section>
  );
}

export default Certs;
