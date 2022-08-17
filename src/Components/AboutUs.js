import React from "react";
import '../../src/styles/Components/AboutMe.css'
import Icons from "./Icons";

const AboutUs = () => {
  return (
    <div className="about-me">
      <p className="about-heading"> About Me </p>
      <p className="about-me-text">
        {" "}
        OLuwapelumi Ojo is a passionate and goal driven Techpreneur whose interest
        is in using technology to build solutions to solve real world problems.{" "}
      </p>
      <Icons />
    </div>
  );
};

export default AboutUs;
