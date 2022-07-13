import React from 'react';
// import addIcon from 'assets/icons/add.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  width: 50px;
  svg {
    height: 10px;
  }
`;

const IconButton = (props) => {
  return (
    <StyledIconButton>
      {/* <img src={addIcon}></img> */}
      <AddIcon></AddIcon>
    </StyledIconButton>
  );
};

IconButton.propTypes = {};

export default IconButton;
