import styled from "styled-components";
export const FooterContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 80px;
  max-width: 1500px;
  margin: 40px auto;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;

  .blodo-logo {
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: start;
  }

  .f1 {
    width: 30%;
  }

  .blodo-desc {
    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: left;
  }

  .reserved {
    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
  }

  .f-header {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
  }

  .f-item {
    color: #777;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin-top: 30px;
    text-align: left;
  }

  span {
    padding: 1px 14px;
    border-radius: 120px;
    background: #65e4a3;
    color: #0a2640;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-left: 5px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;
