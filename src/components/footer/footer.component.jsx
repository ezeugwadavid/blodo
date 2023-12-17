import React from "react";
import { FooterContainer } from "./footer.styles";
import BlodoLogo from "../../assets/blodo-logo.svg";

const Footer = () => (
  <FooterContainer>
    <div className="f1">
      <img className="blodo-logo" src={BlodoLogo} alt="" />
      <div className="blodo-desc">
        Social media validation business model canvas graphical user interface
        launch party creative facebook iPad twitter.
      </div>
      <div className="reserved">All rights reserved.</div>
    </div>

    <div className="f2">
      <div className="f-header">Landings</div>
      <div className="f-item">Home</div>
      <div className="f-item">Products</div>
      <div className="f-item">Services</div>
    </div>

    <div className="f3">
      <div className="f-header">Company</div>
      <div className="f-item">Home</div>
      <div className="f-item">
        Careers <span>Hiring</span>
      </div>
      <div className="f-item">Services</div>
    </div>

    <div className="f4">
      <div className="f-header">Resources</div>
      <div className="f-item">Blog</div>
      <div className="f-item">Products</div>
      <div className="f-item">Services</div>
    </div>
  </FooterContainer>
);

export default Footer;
