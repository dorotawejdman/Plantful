import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ text, color }) => {
  return <StyledButton color={color}>{text}</StyledButton>;
};

Button.propTypes = {};

export default Button;
