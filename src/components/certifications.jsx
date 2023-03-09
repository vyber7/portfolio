import React from "react";
import "../styles/certifications.css";

function Certs() {
  return (
    <section id="certifications">
      <h5>My Certifications</h5>
      <h2>Certifications</h2>

      <div className="container certifications__container">
        <div className="certifications__content">
          <a
            href="https://www.freecodecamp.org/certification/vyber7/responsive-web-design"
            target="_blank"
            rel="noreferrer"
          >
            Resposive Web Design
          </a>
          <a
            href="https://www.freecodecamp.org/certification/vyber7/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noreferrer"
          >
            JavaScript Algorithms and Data Structures
          </a>
          <a
            href="https://www.freecodecamp.org/certification/vyber7/front-end-development-libraries"
            target="_blank"
            rel="noreferrer"
          >
            Front End Development Libraries
          </a>
          <a
            href="https://www.freecodecamp.org/certification/vyber7/data-visualization"
            target="_blank"
            rel="noreferrer"
          >
            Data Visualization
          </a>
          <a
            href="https://www.freecodecamp.org/certification/vyber7/back-end-development-and-apis"
            target="_blank"
            rel="noreferrer"
          >
            Back End Development and APIs
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certs;
