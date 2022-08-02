import React from 'react';
// import addIcon from 'assets/icons/add.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import styled from 'styled-components';
import { TbPlant2 } from 'react-icons/tb';

const StyledIconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.border.radius};
  border: none;
  background-color: ${(props) => props.theme.colors[props.color]};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.neutral1};
  }
`;
//Add choosing different icons based on parameter? Or an icon as a children?
const IconButton = (props) => {
  return (
    <StyledIconButton color={props.color}>
      <TbPlant2 />
    </StyledIconButton>
  );
};

IconButton.propTypes = {};

export default IconButton;
