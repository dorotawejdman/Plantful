import { createGlobalStyle } from 'styled-components';
import './font.scss';
const GlobalStyles = createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap'); */

html{
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.neutral1};
}

*,*::after,*::before {
  box-sizing: inherit;
}

* {
  font-family: 'Nunito', sans-serif;
}

input, button {
  border-radius: ${({ theme }) => theme.border.radius};
}
`;

export default GlobalStyles;
