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
      <div className="title">
        <h5>My Certifications</h5>
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
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          Certifications
        </h2>
      </div>

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
              <a href={item.demo} target="_blank" rel="noreferrer">
                <img src={item.img} alt="img"></img>
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
