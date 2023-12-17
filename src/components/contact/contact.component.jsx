import React from "react";
import { ContactContainer } from "./contact.styles";
import Button from "../button/button.component";
import ellipse from "../../assets/ellipse.svg";

const Contact = () => (
  <ContactContainer>
    <div className="background-container">
      <div className="ellipse-img-cont">
        <img className="ellipse-img" src={ellipse} alt="" />
      </div>

      <div className="contact-container">
        <div className="contact-title">
          An enterprise template to ramp up your company website
        </div>

        <div className="input-section">
          <input type="text" placeholder="Your email address" />
          <div className="btn">
            <Button bgcolor="#65E4A3" color="#0A2640">
              Start now
            </Button>
          </div>
        </div>
      </div>
    </div>
  </ContactContainer>
);

export default Contact;
