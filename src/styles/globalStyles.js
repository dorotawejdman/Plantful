import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');

html{
  box-sizing: border-box;
}

*,*::after,*::before {
  box-sizing: inherit;
}

* {
  font-family: 'Nunito', sans-serif;
}
`;

export default GlobalStyles;
