import styled from "styled-components";

export const HeroContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 80px;
  max-width: 1500px;
  margin: 0px auto;
  padding-top: 30px;

  .logo {
    margin: auto 0px;
    width: 150px;
    height: 70px;
  }

  .top-nav {
    display: flex;
    justify-content: space-between;
  }

  .right-menu {
    display: flex;
  }

  .item {
    margin-right: 20px;
    margin-top: auto;
    margin-bottom: auto;
    color: #0a2640;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 175% */
  }

  .item-last {
    margin-right: 0px;
    padding: 4px 40px;
    border-radius: 24px;
    border: 2px solid #0a2640;
  }

  .buy-btn {
    width: 20%;
    margin-right: 17%;
  }

  .explore-btn {
    width: 15%;
  }

  .hero-section {
    display: flex;
    justify-content: space-between;
    margin-top: 56px;
  }

  .left-section {
    margin: auto 0px;
    width: 50%;
  }

  .hero-text {
    color: #000;
    font-family: "Manrope", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px; /* 150% */
    text-align: left;
  }

  .hero-para {
    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
  }

  .btn-section {
    margin-top: 50px;
    display: flex;
  }

  .right-section {
    width: 50%;
  }

  .top-square {
    display: flex;
    justify-content: end;
  }

  .left-square {
    width: 192.175px;
    height: 165.335px;
    border-radius: 15.03px;
    background: rgba(10, 38, 64, 0.8);
    backdrop-filter: blur(72px);
    margin-right: 30px;
  }

  .btm-square {
    display: flex;
    justify-content: end;
    margin-top: 26px;
  }
  .left-square-icon {
    margin-top: 10px;
  }

  .circle-container {
    position: absolute;
    display: flex;
    justify-content: end;
  }

  .circle {
    position: relative;
    left: 11%;
    bottom: 600px;
    width: 690px;
    height: 750px;
    border-bottom-left-radius: 1293px;
    background: #f1f1f1;
    z-index: -2;
  }

  .partners-logo {
    display: flex;
    justify-content: space-between;
    margin-top: 90px;
    padding-left: 3%;
    padding-right: 3%;
  }

  @media screen and (max-width: 768px) {
  }
`;
