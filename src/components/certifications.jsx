import React from "react";
import "../styles/certifications.css";
import ResponsiveWebDesign from "../assets/responsive_web_design.png";
import JSAlgorithmsAndDataStructures from "../assets/algorithms_and_data_structures.png";
import FrontEndDevelopmentLibraries from "../assets/frontend_libraries.png";
import DataVisualization from "../assets/data_visualization.png";
import BackEndDevelopmentAndAPIs from "../assets/backend_and_apis.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
        <h2>Certifications</h2>
      </div>
      <div className="container certifications__container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="certifications__slider"
        >
          {data.map((item, i) => {
            return (
              <SwiperSlide className="certifications__item" key={i}>
                <a href={item.demo} target="_blank" rel="noreferrer">
                  <img src={item.img} alt="img"></img>
                  <h3>{item.title}</h3>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Certs;
