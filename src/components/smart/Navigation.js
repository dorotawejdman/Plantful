import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from 'assets/icons/Plus.svg';
import { ReactComponent as PlantIcon } from 'assets/icons/Plant.svg';
import { ReactComponent as CallendarIcon } from 'assets/icons/Callendar.svg';
import { ReactComponent as ListIcon } from 'assets/icons/List.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/Settings.svg';
import { flexAround, flexCenter } from 'styles/mixins';

const StyledNavigation = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  box-shadow: 0px 0px 20px 3px rgba(92, 98, 96, 0.5);
  height: ${({ theme }) => theme.height.nav};
  ${flexAround}
  .navBtn {
    background-color: ${({ theme }) => theme.colors.primary2};
    border-radius: ${({ theme }) => theme.border.radius};
    height: 84px;
    width: 84px;
    box-shadow: 0px 2px 14px 2px rgba(0, 0, 0, 0.2);
    ${flexCenter}
    svg {
      height: 37px;
      width: 37px;
    }
  }
`;

const Navigation = (props) => {
  return (
    <StyledNavigation>
      <ListIcon></ListIcon>
      <CallendarIcon></CallendarIcon>
      <div className="navBtn">
        <PlusIcon></PlusIcon>
      </div>
      <PlantIcon></PlantIcon>
      <SettingsIcon></SettingsIcon>
    </StyledNavigation>
  );
};

Navigation.propTypes = {};

export default Navigation;
