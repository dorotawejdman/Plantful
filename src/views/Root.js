import styled, { ThemeProvider } from 'styled-components';
import Button from 'components/shared/Buttons/Button/Button';
import IconButton from 'components/shared/Buttons/IconButton/IconButton';
import GlobalStyles from 'styles/globalStyles';
import { theme } from 'styles/theme';
import FormInput from 'components/shared/Form/FormInput/FormInput';
import Header from 'components/shared/Header/Header';
import LabelsList from 'components/smart/LabelsList';
import LoginInput from 'components/shared/Form/FormInput/LoginInput';
import Navigation from 'components/smart/Navigation';
import Menu from 'components/shared/Menu/Menu';

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.neutral1};
`;

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Button text="add" color="primary"></Button>
        <Button text="display" color="accent2"></Button>
        <IconButton color="accent2"></IconButton>
        <FormInput></FormInput>
        <LoginInput>Login</LoginInput>
        <LoginInput>Password</LoginInput>
        <Header>Create plant</Header>
        <Header>Create list</Header>
        <LabelsList></LabelsList>
        <Menu></Menu>
        <Navigation></Navigation>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
