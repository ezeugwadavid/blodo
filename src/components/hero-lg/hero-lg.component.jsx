import React from "react";
import { HeroLgContainer } from "./hero-lg.styles";
import BlodoLogo from "../../assets/blodo-logo.svg";
import LogoName from "../../assets/logo-name.svg";
import LogoSmall from "../../assets/logo-small.svg";
import PresName from "../../assets/pres-name.svg";
import PrestoLogo from "../../assets/presto-logo.svg";
import Button from "../button/button.component";
import Arc from "../arc/arc.component";
import HeroGraphics from "../../assets/Hero-Graphics.svg";

const HeroLg = () => {
  return (
    <HeroLgContainer>
      <div className="top-nav">
        <img className="logo" src={BlodoLogo} alt="" />
        <div className="right-menu">
          <div className="item">Product</div>
          <div className="item">Services</div>
          <div className="item">About</div>
          <div className="item item-last">Log In</div>
        </div>
      </div>
      <Arc />
      <div className="hero-section">
        <div className="left-section">
          <div className="hero-text">
            Save time by building fast with Boldo Template
          </div>
          <div className="hero-para">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </div>
          <div className="btn-section">
            <div className="buy-btn">
              <Button>Buy template</Button>
            </div>

            <div className="explore-btn">
              <Button color="#0A2640" bgcolor="#FFF">
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img className="hero-graphics" src={HeroGraphics} alt="" />
        </div>
      </div>
      <div className="partners-logo">
        <img className="pat-logo" src={LogoSmall} alt="" />
        <img className="pat-logo" src={PrestoLogo} alt="" />
        <img className="pat-logo" src={LogoSmall} alt="" />
        <img className="pat-logo" src={PrestoLogo} alt="" />
        <img className="pat-logo" src={LogoName} alt="" />
        <img className="pat-logo" src={PresName} alt="" />
      </div>
    </HeroLgContainer>
  );
};

export default HeroLg;
