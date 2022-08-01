import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormInput } from './FormInput.styles';

const FormInput = (props) => {
  return (
    <StyledFormInput>
      <input type="text"></input>
      <label>desctipityon</label>
    </StyledFormInput>
  );
};

FormInput.propTypes = {};

export default FormInput;
