import styled from "styled-components";

export const ServiceContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-left: 5%;
  padding-right: 5%;
  max-width: 1500px;
  margin: 0px auto;
  padding-top: 80px;
  padding-bottom: 90px;

  .services-text {
    color: #f1f1f1;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
  }

  .center-text-big {
    color: #fff;
    text-align: center;
    font-family: "Manrope", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
  }

  .card-section {
    display: flex;
    justify-content: space-between;
  }

  .humancard1 {
    display: flex;
    justify-content: center;
    margin: 0px auto;
    width: 100%;
  }

  .card-item {
    width: 28%;
    margin-top: 70px;
  }

  .btm-text {
    margin-top: 24px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    display: flex;
    justify-content: start;
  }

  .nav-text-container {
    display: flex;
    border-bottom: 1px solid #fff;
    width: 40%;
    cursor: pointer;
  }

  .nav-text {
    margin-top: auto;
    margin-bottom: auto;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin-right: 5px;
  }

  .arr-right {
    margin: auto 0px;
  }

  @media screen and (max-width: 768px) {
  }
`;
