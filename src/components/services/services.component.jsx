import React from "react";
import { ServiceContainer } from "./services.styles";
import Humancard1 from "../../assets/human-card1.svg";
import Humancard2 from "../../assets/human-card2.svg";
import Humancard3 from "../../assets/human-card3.svg";
import ArrowRight from "../../assets/arrow-right.svg";


const Services = () => {
  return (
    <ServiceContainer>
     <div className="services-text">Our services</div>
     <div className="center-text-big">
     Handshake infographic mass market crowdfunding iteration.
     </div>

     <div className="card-section">
        <div className="card-item">
            <img className="humancard1" src={Humancard1} alt="" />
            <div className="btm-text">Cool feature title</div>
                <div className="nav-text-container">
                    <div className="nav-text">
                    Explore page
                    </div>
                    <img className="arr-right" src={ArrowRight} alt="" />
                </div>
        </div>
        <div className="card-item">
            <img className="humancard1" src={Humancard2} alt="" />
            <div className="btm-text">Even cooler feature</div>
                <div className="nav-text-container">
                    <div className="nav-text">
                    Explore page
                    </div>
                    <img className="arr-right" src={ArrowRight} alt="" />
                </div>
        </div>
        <div className="card-item">
            <img className="humancard1" src={Humancard3} alt="" />
            <div className="btm-text">Cool feature title</div>
                <div className="nav-text-container">
                    <div className="nav-text">
                    Explore page
                    </div>
                    <img className="arr-right" src={ArrowRight} alt="" />
                </div>
        </div>
     </div>


    </ServiceContainer>
  );
};

export default Services;
