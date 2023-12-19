import React from "react";
import { HeroContainer } from "./hero.styles";
import HeroMobile from "../hero-mobile/hero-mobile.component";
import HeroDesktop from "../hero-desktop/hero-desktop.component";
import HeroLg from "../hero-lg/hero-lg.component";


const Hero = () => {
  return (
    <HeroContainer>
    <div className="hero-mobile">
      <HeroMobile />
    </div>
    <div className="hero-desktop">
      {/* <HeroDesktop /> */}
      <HeroLg />
    </div>
    </HeroContainer>
  );
};

export default Hero;
