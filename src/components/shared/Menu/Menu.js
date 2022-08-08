import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const StyledMenu = styled.ul`
  background-color: ${({ theme }) => theme.colors.neutral4};
  position: sticky;
  bottom: ${({ theme }) => theme.height.nav};
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 10px 2px rgba(146, 144, 141, 0.25);
  margin: 0;
`;
const Menu = () => {
  return (
    <StyledMenu>
      <MenuItem>Plant</MenuItem>
      <MenuItem>Activity</MenuItem>
    </StyledMenu>
  );
};

Menu.propTypes = {};

export default Menu;
