import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Line } from 'assets/Line.svg';
import { flexCenter } from 'styles/mixins';

const StyledMenuItem = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black2};
  font-size: ${({ theme }) => theme.fontSize.sm};
  height: 73px;
  ${flexCenter}
`;

const MenuItem = ({ children }) => {
  return (
    <>
      <StyledMenuItem>{children}</StyledMenuItem>
      <Line></Line>
    </>
  );
};

MenuItem.propTypes = {};

export default MenuItem;
