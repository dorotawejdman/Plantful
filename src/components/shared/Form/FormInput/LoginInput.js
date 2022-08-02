import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { StyledLoginInput } from './LoginInput.styles';

const StyledLoginInput = styled.div`
  input {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary4};
  }
`;

const LoginInput = (props) => {
  return (
    <StyledLoginInput>
      <label>desctipityon</label>
      <input type="text"></input>
    </StyledLoginInput>
  );
};

LoginInput.propTypes = {};

export default LoginInput;
