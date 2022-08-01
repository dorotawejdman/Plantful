import React from 'react';
import styled from 'styled-components';

export const StyledLabel = styled.div`
  background-color: ${(props) => (props.isActive ? props.theme.colors.accent3 : props.theme.colors.grayLight)};
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius};
  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin: 0;
  }
`;

const Label = (props) => {
  return (
    <StyledLabel isActive={props.isActive}>
      <p>Label</p>
    </StyledLabel>
  );
};

export default Label;
