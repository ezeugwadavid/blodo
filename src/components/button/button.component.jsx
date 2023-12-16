import React from "react";
import { ButtonContainer } from "./button.styles";
import PropTypes from "prop-types";

const Button = ({ children, handleClick, ...otherProps }) => {
  return (
    <ButtonContainer {...otherProps} onClick={handleClick}>
      <div className="custom-btn">{children}</div>
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
};

export default Button;
