import React from "react";
import '../../src/styles/Components/Skills.css'
import Python from "../../src/assets/Python.png";
import JavaScript from '../../src/assets/Javascript.png'
import Html from "../../src/assets/Html.png"

const Skills = () => {
  return (
    <div className="skill-set">
      <div className="skills">
        <div>
          {" "}
          <h3> My Skills </h3>
        </div>
        <div>
          {" "}
          <p> Here are a few skills i possess </p>{" "}
        </div>
      </div>

      <div className="mySkills">
        <div>
          <div className="python">
            <div>
              {" "}
              <img src={Python} alt="python-icon" />{" "}
            </div>

            <div className="value">
              <h3 className="text-p"> Python </h3>
              <meter className="meter-1" value={0.5}></meter>
            </div>
          </div>

          <div className="python">
            <div>
              {" "}
              <img src={JavaScript} alt="python-icon" />{" "}
            </div>

            <div className="value">
              <h3 className="text-p"> JavaScript </h3>
              <meter className="meter-2" value={0.7}></meter>
            </div>
          </div>

          <div className="python">
            <div>
              {" "}
              <img src={Python} alt="python-icon" />{" "}
            </div>

            <div className="value">
              <h3 className="text-p"> React </h3>
              <meter className="meter-3" value={0.4}></meter>
            </div>
          </div>
        </div>


        <div>
          <div className="python">
            <div>
              {" "}
              <img src={Html} alt="python-icon" />{" "}
            </div>

            <div className="value">
              <h3 className="text-p"> HTML </h3>
              <meter className="meter-4" value={0.9}></meter>
            </div>
          </div>

          <div className="python">
            <div>
              {" "}
              <img src={JavaScript} alt="python-icon" />{" "}
            </div>

            <div className="value">
              <h3 className="text-p"> CSS </h3>
              <meter className="meter-5" value={0.9}></meter>
            </div>
          </div>

          <div className="python">
            <div>
              {" "}
              <img src={Python} alt="python-icon" />{" "}
            </div>

            <div className="value">
              <h3 className="text-p"> React </h3>
              <meter className="meter-6" value={0.9}></meter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
