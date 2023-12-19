import styled from "styled-components";

export const ConnectCustomerContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 100px;
  padding-bottom: 150px;
  max-width: 1500px;
  margin: 0px auto;

  .img {
  }

  .customer-image {
    width: 100%;
  }

  .connect-section {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .conn-cus-left {
    color: #000;
    font-family: "Manrope", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    width: 40%;
    text-align: left;
  }

  .conn-item {
    display: flex;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .connect-txt {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 20px;
  }

  @media screen and (max-width: 800px) {
    padding-left: 0%;
    padding-right: 0%;
    padding-top: 50px;
    padding-bottom: 70px;
    margin: 0px auto;

    .connect-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 50px;
    }

    .conn-cus-left {
      color: #000;
      font-family: "Manrope", sans-serif;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 56px;
      width: 90%;
      text-align: left;
      margin: 0px auto;
    }

    .conn-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  }

    .conn-cus-right {
      width: 90%;
      /* margin: 0px auto; */
      margin-top: 30px;
    }

    .connect-txt {
    width: 100%;
  }
  }
`;
