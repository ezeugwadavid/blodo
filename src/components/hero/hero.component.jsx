import React from "react";
import { HeroContainer } from "./hero.styles";
import BlodoLogo from "../../assets/blodo-logo.svg";
import Rectangle from "../../assets/rectangle.svg";
import SquareRight from "../../assets/square-right.svg";
import BarChart from "../../assets/bar-chart.svg";
import LogoName from "../../assets/logo-name.svg";
import LogoSmall from "../../assets/logo-small.svg";
import PresName from "../../assets/pres-name.svg";
import PrestoLogo from "../../assets/presto-logo.svg";
import Button from "../button/button.component";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="top-nav">
        <img className="logo" src={BlodoLogo} alt="" />
        <div className="right-menu">
          <div className="item">Product</div>
          <div className="item">Services</div>
          <div className="item">About</div>
          <div className="item item-last">Log In</div>
        </div>
      </div>
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
          <div className="top-square">
            <img src={Rectangle} alt="" />
          </div>
          <div className="circle-container">
            <div className="circle"></div>
          </div>
          <div className="btm-square">
            <div className="left-square">
              <img className="left-square-icon" src={BarChart} alt="" />
            </div>
            <img src={SquareRight} alt="" />
          </div>
        </div>
      </div>
      <div className="partners-logo">
        <img src={LogoSmall} alt="" />
        <img src={PrestoLogo} alt="" />
        <img src={LogoSmall} alt="" />
        <img src={PrestoLogo} alt="" />
        <img src={LogoName} alt="" />
        <img src={PresName} alt="" />
      </div>
    </HeroContainer>
  );
};

export default Hero;
