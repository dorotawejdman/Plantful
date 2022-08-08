import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormSelect } from './FormSelect.styles';

const FormSelect = ({ children, options }) => {
  return (
    <StyledFormSelect>
      <select name="" id="">
        {options.map((value, id) => (
          <option key={id}>{value}</option>
        ))}
      </select>
      <label htmlFor="">{children}</label>
    </StyledFormSelect>
  );
};

FormSelect.propTypes = {};

export default FormSelect;
