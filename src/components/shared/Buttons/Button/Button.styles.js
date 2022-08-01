import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${({ theme }) => theme.colors.neutral1};
  border-radius: 4px;
  text-transform: uppercase;
  padding: 9px 63px;
  margin: 10px;
  border: none;
  font-size: 1.2rem;
`;
