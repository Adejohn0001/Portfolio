import React from "react";
import "../../src/styles/Components/Footer.css";
import linkedin from "../../src/assets/linked.png";
import tweet from "../../src/assets/tweet.png";
import Email from "../../src/assets/Email.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="my-name">
        <div>
          <h3> Oluwapelumi Ojo </h3>
        </div>

        <div className="socials">
          <div>
            <a
              href={"https://www.linkedin.com/in/oluwapelumi-ojo-2837a01a9"}
              target="_blank"
              rel="noopener noreferrer"
            >
                <img src={linkedin} alt="LinkedIn-icon" />
            </a>
           
          </div>

          <div>
            <a
              href={"https://mobile.twitter.com/@Tobby_adejohn"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tweet} alt="Twitter-icon" />
            </a>
          </div>

          <div>
            <img src={Email} alt="Email-icon" />
          </div>
        </div>

        <div>
          <p> Copyright &copy; 2021 | All rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
