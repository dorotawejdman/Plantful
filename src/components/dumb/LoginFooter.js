import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLoginFooter = styled.div`
  text-align: center;
  p {
    color: ${({ theme }) => theme.colors.primary2};
    font-weight: 400;
  }
  .link {
    color: ${({ theme }) => theme.colors.primary4};
    font-weight: 800;
  }
`;
const LoginFooter = (props) => {
  return (
    <StyledLoginFooter>
      <p>Dont have account?</p>
      <p className="link">Register for free</p>
    </StyledLoginFooter>
  );
};

LoginFooter.propTypes = {};

export default LoginFooter;
