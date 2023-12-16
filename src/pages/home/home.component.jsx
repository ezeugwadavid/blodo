import React from "react";
import { HomeContainer } from "./home.styles";
import Hero from "../../components/hero/hero.component";
import Services from "../../components/services/services.component";
import Connect from "../../components/connect/connect.component";

const Home = () => {
  return (
    <HomeContainer>
      <div className="hero-comp">
      <Hero />
      </div>

      <div className="service-comp">
      <Services />
      </div>

      <div className="connect-comp">
      <Connect />
      </div>
    </HomeContainer>
  );
};

export default Home;
