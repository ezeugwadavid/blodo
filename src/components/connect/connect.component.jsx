import React from "react";
import { ConnectContainer } from "./connect.styles";
import Button from "../button/button.component";
import ManImage from "../../assets/man-rectangle.svg";
import GraphCard from "../../assets/graph-card.svg";
import Tick from "../../assets/tick.svg";
import Sun from "../../assets/sun.svg";
import WomanImage from "../../assets/woman-rectangle.svg";
import PieChart from "../../assets/pie-chart.svg";
import Feather from "../../assets/feather.svg";
import Eye from "../../assets/eye.svg";

const Connect = () => {
  return (
    <ConnectContainer>
      <div className="first-connect">
        <div className="left-section">
          <div className="image-container">
            <img src={ManImage} alt="" />
            <div className="second-img">
              <img className="graph-img" src={GraphCard} alt="" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="catch-text">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>

          <div className="point-text">
            <img src={Tick} alt="" />
            <div className="point-para">
              We connect our customers with the best.
            </div>
          </div>
          <div className="point-text">
            <img src={Tick} alt="" />
            <div className="point-para">
              Advisor success customer launch party.
            </div>
          </div>
          <div className="point-text">
            <img src={Tick} alt="" />
            <div className="point-para">Business-to-consumer long tail.</div>
          </div>

          <div className="btn-section">
            <Button color="#FFF" bgcolor="#0A2640">
              Start now
            </Button>
          </div>
        </div>
      </div>

      <div className="second-connect">
        <div className="left-sec">
          <div className="catch-para">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </div>
          <div className="key-point">
            <img src={Feather} alt="" />
            <div className="key-text">
              We connect our customers with the best.
            </div>
          </div>

          <div className="key-point1">
            <img src={Eye} alt="" />
            <div className="key-text1">
              Advisor success customer launch party.
            </div>
          </div>

          <div className="key-point1">
            <img src={Sun} alt="" />
            <div className="key-text1">Business-to-consumer long tail.</div>
          </div>
        </div>

        <div className="right-sec">
          <img src={WomanImage} alt="" />
          <div className="pie-chart">
            <img className="pie-chart-img" src={PieChart} alt="" />
          </div>
        </div>
      </div>
    </ConnectContainer>
  );
};

export default Connect;
