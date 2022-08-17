import React from "react";
import "../../src/styles/Components/Services.css";
import Desktop from "../../src/assets/Desktop.png";
import Responsive from "../../src/assets/Responsive.png"
import Graphics from "../../src/assets/Consultation.png"
import Notes from "../../src/assets/Notes.png"

const Services = () => {
  return (
    <div className="services">
      <div>
        <div className="services-i-rendered">
          <h5>Services I Render.</h5>
        </div>
        <div>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            sollicitudin tellus. Phasellus ac nisi augue.
          </p>
        </div>
      </div>

      <div className="container-one">
        <div className="web-development">
          <div>
            <img src={Desktop} alt={"Desktop-icon"} />
          </div>
          <div>
            <h6>Web Development</h6>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
              sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Cras nec sollicitudin tellus.
            </p>
          </div>
        </div>

        <div className="web-development">
          <div>
            <img src={Responsive} alt={"Desktop-icon"} />
          </div>
          <div>
            <h6>Responsive Web Design</h6>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
              sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Cras nec sollicitudin tellus.
            </p>
          </div>
        </div>


      </div>


      <div className="container-two">
        <div className="web-development">
          <div>
            <img src={Notes} alt={"Desktop-icon"} />
          </div>
          <div>
            <h6>Video Animation</h6>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
              sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Cras nec sollicitudin tellus.
            </p>
          </div>
        </div>

        <div className="web-development">
          <div>
            <img src={Graphics} alt={"Desktop-icon"} />
          </div>
          <div>
            <h6>Graphics Design</h6>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
              sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Cras nec sollicitudin tellus.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Services;
