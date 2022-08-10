import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import { theme } from 'styles/theme';
import Navigation from 'components/smart/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from 'pages/Login';
import { CreatePlant } from 'pages/CreatePlant';
import { Calendar } from 'pages/Calendar';

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.neutral1};
  top: ${({ theme }) => theme.height.header};
  height: 100vh;
`;

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/create-plant" element={<CreatePlant />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
          </Routes>
        </Wrapper>
        <Navigation></Navigation>
      </Router>
    </ThemeProvider>
  );
}

export default Root;
