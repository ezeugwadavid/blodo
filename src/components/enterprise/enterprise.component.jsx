import React from "react";
import { EnterpriseContainer } from "./enterprise.styles";
import ArrLeft from "../../assets/arr-left-circle.svg";
import ArrRight from "../../assets/arr-right-circle.svg";
import Avatar1 from "../../assets/avatar1.svg";
import Avatar2 from "../../assets/avatar2.svg";
import Avatar3 from "../../assets/avatar3.svg";

const Enterprise = () => (
  <EnterpriseContainer>
    <div className="enterprise">
      <div className="enterprise-left">
        An enterprise template to ramp up your company website
      </div>
      <div className="enterprise-right">
        <div className="circle-arr1">
          <img src={ArrRight} alt="" />
        </div>
        <div className="circle-arr">
          <img src={ArrLeft} alt="" />
        </div>
      </div>
    </div>

    <div className="box-card-section">
      <div className="card-1">
        <div className="phrase">
          “Buyer buzz partner network disruptive non-disclosure agreement
          business”
        </div>

        <div className="btm-card">
          <img src={Avatar1} alt="" />
          <div className="user-section">
            <div className="user-name">Albus Dumbledore</div>
            <div className="occupation">Manager @ Howarts</div>
          </div>
        </div>
      </div>

      <div className="card-2">
        <div className="phrase phrase2">
          “Learning curve infrastructure value proposition advisor strategy user
          experience hypotheses investor.”
        </div>

        <div className="btm-card">
          <img src={Avatar2} alt="" />
          <div className="user-section">
            <div className="user-name">Severus Snape</div>
            <div className="occupation">Manager @ Slytherin</div>
          </div>
        </div>
      </div>

      <div className="card-3">
        <div className="phrase phrase3">
          “Release facebook responsive web design business model canvas seed
          money monetization.”
        </div>

        <div className="btm-card">
          <img src={Avatar3} alt="" />
          <div className="user-section">
            <div className="user-name">Harry Potter</div>
            <div className="occupation">Team Leader @ Gryffindor</div>
          </div>
        </div>
      </div>
    </div>
  </EnterpriseContainer>
);

export default Enterprise;
