import React, { useState } from "react";
import { HeroMobileContainer } from "./hero-mobile.styles";
import BlodoLogo from "../../assets/blodo-logo.svg";
import LogoName from "../../assets/logo-name.svg";
import LogoSmall from "../../assets/logo-small.svg";
import PresName from "../../assets/pres-name.svg";
import PrestoLogo from "../../assets/presto-logo.svg";
import MenuLogo from "../../assets/menu-left-icon.svg";
import HeroGraphics from "../../assets/Hero-Graphics.svg";
import Button from "../button/button.component";

const HeroMobile = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <HeroMobileContainer>
      <div className="nav-icon" onClick={() => setToggleNav(!toggleNav)}>
        <img src={MenuLogo} alt="" />
      </div>
      {toggleNav ? (
        <div className="top-nav-mobile">
          <div className="logo-section">
            <img className="logo" src={BlodoLogo} alt="" />
            <div className="close" onClick={() => setToggleNav(!toggleNav)}>
              X
            </div>
          </div>
          <div className="menu">
            <div className="item">Product</div>
            <div className="item">Services</div>
            <div className="item">About</div>
            <div className="item">Log In</div>
          </div>
        </div>
      ) : (
        ""
      )}

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
        <img className="logo-xs" src={LogoSmall} alt="" />
        <img className="logo-xs" src={PrestoLogo} alt="" />
        <img className="logo-xs" src={LogoSmall} alt="" />
        <img className="logo-xs" src={PrestoLogo} alt="" />
        <img className="logo-xs" src={LogoName} alt="" />
        <img className="logo-xs" src={PresName} alt="" />
      </div>
    </HeroMobileContainer>
  );
};

export default HeroMobile;
