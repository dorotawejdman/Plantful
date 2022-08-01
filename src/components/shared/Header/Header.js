import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding: 40px 0 10px 0;
  text-align: center;
  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 500;
  }
`;

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <h2>{title}</h2>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
