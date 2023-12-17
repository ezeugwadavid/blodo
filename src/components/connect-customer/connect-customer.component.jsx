import React from "react";
import { ConnectCustomerContainer } from "./connect-customer.styles";
import CustomerImage from "../../assets/customer-image.svg";
import ArrowDown from "../../assets/arrow-down.svg";

const ConnectCustomer = () => {
  return (
    <ConnectCustomerContainer>
      <div className="img">
        <img className="customer-image" src={CustomerImage} alt="" />
      </div>
      <div className="connect-section">
        <div className="conn-cus-left">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </div>
        <div className="conn-cus-right">
          <div className="conn-item">
            <div className="connect-txt">
              We connect our customers with the best?
            </div>
            <img src={ArrowDown} alt="" />
          </div>
          <div className="conn-item">
            <div className="connect-txt">
              We connect our customers with the best?
            </div>
            <img src={ArrowDown} alt="" />
          </div>
        </div>
      </div>
    </ConnectCustomerContainer>
  );
};

export default ConnectCustomer;
