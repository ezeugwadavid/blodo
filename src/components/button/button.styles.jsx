import styled from "styled-components";

export const ButtonContainer = styled.div`
  .custom-btn {
    padding: 10px 40px;
    border-radius: 56px;
    justify-content: center;
    align-items: center;
    color: ${({ color }) => (color ? color : "#FFF")};
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    border: 2px solid
      ${({ borderColor }) => (borderColor ? borderColor : "#0A2640")};
    background: ${({ bgcolor }) => (bgcolor ? bgcolor : "#0A2640")};
    width: 100%;
    cursor: pointer;
  }
`;
