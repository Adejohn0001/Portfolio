import React from "react";
import "../../src/styles/Components/GetInTouch.css";
import Icons from "./Icons";
import message from '../../src/assets/Message.png'
import call from '../../src/assets/Call.png'

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <div className="in-touch">
        <p className="bold">Get In Touch.</p>
        <p className="not-bold">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
          sollicitudin tellus. Phasellus ac nisi augue.{" "}
        </p>
        <div className="socials-media">
            <Icons />
            <div> <p> - Oluwapelumi </p> </div>
        </div>
        <div className="message">
            <div> 
             <img src={message} alt="Email-icon" />
           </div>
            <div>
                <h6>oluwapelumiojo05@gmail.com</h6>
                <p>Send a message Anytime!</p>
            </div>
        </div>

        <div className="message2">
            <div><img src={call} alt="Call-icon" /></div>
            <div>
                <h6>+234 - 81185 - 97743</h6>
                <p>Send a message Anytime!</p>
            </div>
        </div>
      </div>

      <div className="form">
        <div className="form-body">
            <div><p>Need a service?</p></div>
            <div><h5>Send A Message</h5></div>

            <form>
                <div>
                    <label>Enter Fullname</label><br />
                    <input type='text'  />
                </div>

                <div>
                    <label>Enter Email Address</label><br />
                    <input type='email'  />
                </div>

                <div>
                    <label>Write a Message</label><br />
                    <input type='text' className="input-message" />
                </div>
                <button> <a href={'AboutUs.js'} className="send" > Send a message </a></button>
            </form>
        </div>
        
      </div>
    </div>
  );
};

export default GetInTouch;
