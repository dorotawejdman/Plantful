import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { StyledLoginInput } from './LoginInput.styles';

const StyledLoginInput = styled.div`
  position: relative;
  margin: 20px;
  input {
    width: 200px;
    height: 45px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary4};
    padding: 7px 13px 1px 13px;
    font-size: 18px;
    &:focus-visible {
      outline: none;
      border-width: 2px;
    }
  }
  label {
    background-color: ${({ theme }) => theme.colors.neutral1};
    position: absolute;
    top: -13px;
    left: 5px;
    padding: 0 10px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.primary4};
    font-size: 16px;
  }
`;

const LoginInput = ({ children }) => {
  return (
    <StyledLoginInput>
      <label>{children}</label>
      <input type="text"></input>
    </StyledLoginInput>
  );
};

LoginInput.propTypes = {};

export default LoginInput;