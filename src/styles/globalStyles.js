import { createGlobalStyle } from 'styled-components';
import './font.scss';
const GlobalStyles = createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap'); */

html{
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.neutral1};
  overflow: hidden;
  width:100vw;
}

*,*::after,*::before {
  box-sizing: inherit;
}

* {
  font-family: 'Nunito', sans-serif;
}

button{
  border: 0;
}

input, button {
  border-radius: ${({ theme }) => theme.border.radius};
}

input, select{
  color: ${({ theme }) => theme.colors.black};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayMedium};
  margin-top: 5px;
  padding-bottom: 5px;
  border-radius: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  &:focus-visible {
    outline: none;
  }
  width: 100%;
}

label {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.grayMedium};
    margin-top: 2px;
    text-transform: capitalize;
  }

h3 {
  font-size:  ${({ theme }) => theme.fontSize.m};
  color:  ${({ theme }) => theme.colors.black};
}

p{
  margin: 5px 10px;
}

ul {
  padding: 0;
}
`;

export default GlobalStyles;
