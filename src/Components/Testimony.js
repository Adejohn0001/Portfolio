import React from "react";
import "../../src/styles/Components/Testimony.css";
import Testifier from "../../src/assets/Testifier.png";

const Testimony = () => {
  return (
    <div className="testimony">
      <div className="testimonies">
        <h4> Testimonies & Recommendations </h4>
      </div>

      <div className="people-testimony">
        <div className="container1">
          <div className="testifier1">
            <img src={Testifier} alt="" />
            <h4>Makinde Martins</h4>
            <p>
              Oluwapelumi gets things done. He's very passionate about what he does and
              he's always fun to be with.
            </p>
          </div>

          <div className="testifier2">
            <img src={Testifier} alt="" />
            <h4>Testifier 2</h4>
            <p>
              Oluwapelumi gets things done. He's very passionate about what he does and
              he's always fun to be with.
            </p>
          </div>
        </div>


        <div className="container2">
          <div className="testifier3">
            <img src={Testifier} alt="" />
            <h4>Testifier 3</h4>
            <p>
              Oluwapelumi gets things done. He's very passionate about what he does and
              he's always fun to be with.
            </p>
          </div>

          <div className="testifier4">
            <img src={Testifier} alt="" />
            <h4>Testifier 4</h4>
            <p>
              Oluwapelumi gets things done. He's very passionate about what he does and
              he's always fun to be with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
