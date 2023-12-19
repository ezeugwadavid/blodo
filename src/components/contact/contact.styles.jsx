import styled from "styled-components";
export const ContactContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 100px;
  padding-bottom: 150px;
  max-width: 1500px;
  margin: 0px auto;

  .background-container {
    border-radius: 12px;
    background: #0a2640;
  }

  .contact-container {
    padding: 10% 12%;
  }

  .ellipse-img-cont {
    display: flex;
    justify-content: end;
  }

  .ellipse-img {
    position: absolute;
    opacity: 0.7;
    display: flex;
    justify-content: end;
  }

  .contact-title {
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    text-align: center;
    font-family: "Manrope", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    margin-bottom: 40px;
    width: 80%;
  }

  .input-section {
    display: flex;
    justify-content: center;
  }

  input {
    border-radius: 240px;
    border: 2px solid #fff;
    background: #fff;
    outline: none;
    margin-right: 20px;
    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    width: 40%;
  }

  .btn {
    width: 10%;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    .ellipse-img-cont {
      display: none;
    }

    .contact-title {
      margin-left: auto;
      margin-right: auto;
      color: #fff;
      text-align: center;
      font-family: "Manrope", sans-serif;
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: 72px;
      margin-bottom: 40px;
      width: 100%;
    }

    .input-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    input {
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .btn {
      width: 20%;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      margin-left: 30%;
    }
  }

  @media screen and (max-width: 400px) {
    .contact-title {
      font-size: 40px;
    }

    .btn {
      width: 10%;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      margin-left: 30%;
    }
  }
`;
