import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/shared/Label/Label';
import styled from 'styled-components';

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LabelsList = (props) => {
  return (
    <StyledLabel>
      <Label isActive></Label>
      <Label isActive={false}></Label>
      <Label isActive></Label>
      <Label isActive={false}></Label>
    </StyledLabel>
  );
};

LabelsList.propTypes = {};

export default LabelsList;
