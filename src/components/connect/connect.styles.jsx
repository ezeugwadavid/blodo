import styled from "styled-components";

export const ConnectContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-left: 5%;
  padding-right: 5%;
  max-width: 1500px;
  margin: 0px auto;
  padding-top: 100px;
  .first-connect {
    display: flex;
    justify-content: space-between;
  }

  .image-container {
  }

  .second-img {
    position: absolute;
  }

  .graph-img {
    position: relative;
    bottom: 300px;
    left: 120px;
    z-index: 1;
  }

  .right-section {
    margin: auto 0px;
    width: 40%;
  }

  .catch-text {
    color: #000;
    font-family: "Manrope", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    text-align: left;
    margin-bottom: 40px;
  }

  .point-text {
    display: flex;
  }

  .point-para {
    margin-left: 10px;
  }

  .point-text {
    color: #000;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 160% */
    margin-bottom: 20px;
  }

  .btn-section {
    width: 25%;
    margin-top: 50px;
  }

  .second-connect {
    margin-top: 250px;
    display: flex;
    justify-content: space-between;
  }

  .left-sec {
    margin: auto 0px;
    width: 40%;
  }

  .catch-para {
    color: #000;
    font-family: "Manrope", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px; /* 155.556% */
    text-align: left;
    margin-bottom: 70px;
  }

  .key-point {
    display: flex;
    border-radius: 4px;
    background: #0a2640;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.08);
    padding: 16px;
    margin-bottom: 20px;
  }

  .key-point1 {
    display: flex;
    border-radius: 4px;
    background: #0a2640;
    background: #fff;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.08);
    margin-bottom: 20px;
    padding: 16px;
  }

  .key-text {
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 175% */
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .key-text1 {
    color: #000;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 175% */
    margin-left: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .right-sec {
  }

  .pie-chart {
    position: absolute;
  }

  .pie-chart-img {
    position: relative;
    bottom: 250px;
    left: 30px;
  }

  @media screen and (max-width: 768px) {
  }
`;
