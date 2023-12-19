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

  @media screen and (max-width: 800px) {
    font-family: "Open Sans", sans-serif;
    padding-left: 0%;
    padding-right: 0%;
    max-width: 100%;
    padding-top: 100px;

    .first-connect {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .man-image {
      width: 80%;
    }

    .second-img {
      position: absolute;
    }

    .graph-img {
      position: relative;
      bottom: 190px;
      left: 90px;
      z-index: 1;
      width: 100%;
      height: 250px;
    }

    .second-connect {
      margin-top: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .woman-img {
      width: 100%;
      height: 300px;
    }

    .right-section {
      margin: 50px auto;
      width: 90%;
    }

    .catch-text {
      color: #000;
      font-family: "Manrope", sans-serif;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 56px;
      text-align: center;
      margin-bottom: 40px;
    }

    .point-text {
      display: flex;
      justify-content: start;
    }

    .point-para {
      margin-left: 10px;
      text-align: left;
    }

    .tick {
      width: 30px;
      height: 30px;
      margin: auto 0px;
    }

    .btn-section {
      width: 30%;
      margin-top: 50px;
      margin-left: 20%;
    }

    .second-connect {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
    }

    .left-sec {
      margin: auto auto;
      width: 90%;
    }

    .catch-para {
      color: #000;
      font-family: "Manrope", sans-serif;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 56px; /* 155.556% */
      text-align: center;
      margin-bottom: 70px;
    }

    .pie-chart-img {
      position: relative;
      width: 100%;
      height: 200px;
      bottom: 150px;
      left: 120px;
    }
  }

  @media screen and (min-width: 450px) and (max-width: 800px) {
    .graph-img {
      position: relative;
      bottom: 190px;
      left: 100%;
      z-index: 1;
      width: 100%;
      height: 250px;
    }

    .pie-chart-img {
      position: relative;
      width: 100%;
      height: 200px;
      bottom: 150px;
      left: 100%;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    .man-image {
      width: 80%;
    }

    .right-section {
      margin: auto 0px;
      width: 50%;
    }

    .left-sec {
      margin: auto 0px;
      width: 50%;
    }

    .graph-img {
      position: relative;
      bottom: 250px;
      left: 70px;
      z-index: 1;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1000px) {
    .left-sec {
      margin: auto 0px;
      width: 60%;
    }
    .woman-img {
      width: 100%;
      height: 300px;
    }

    .pie-chart-img {
      position: relative;
      width: 100%;
      height: 200px;
      bottom: 150px;
      left: 50%;
    }
  }
`;
