import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormInput } from './FormInput.styles';

const FormInput = ({ type = 'text', children }) => {
  return (
    <StyledFormInput>
      <input type={type}></input>
      <label>{children}</label>
    </StyledFormInput>
  );
};

FormInput.propTypes = {};

export default FormInput;
