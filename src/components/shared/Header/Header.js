import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding-top: 40px;
  height: ${({ theme }) => theme.height.header};
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
  }
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <h2>{children}</h2>
    </StyledHeader>
  );
};

export default Header;
