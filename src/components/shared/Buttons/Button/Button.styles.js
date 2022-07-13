import styled from 'styled-components';
import 'styles/main.scss';

export const StyledButton = styled.button`
  background-color: ${(props) => `var(--${props.color})`};
  color: white;
  border-radius: 5px;
  padding: 8px 20px;
  margin: 10px;
  border: none;
  font-size: 1.2rem;
`;
