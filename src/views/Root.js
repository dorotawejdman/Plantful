import styled, { ThemeProvider } from 'styled-components';
import Button from 'components/shared/Buttons/Button/Button';
import IconButton from 'components/shared/Buttons/IconButton/IconButton';
import GlobalStyles from 'styles/globalStyles';
import { theme } from 'styles/theme';
import Header from 'components/shared/Header/Header';
import LabelsList from 'components/smart/LabelsList';
import LoginInput from 'components/shared/Form/LoginInput';
import Navigation from 'components/smart/Navigation';
import PlantForm from 'components/smart/PlantForm';

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.neutral1};
  padding-top: ${({ theme }) => theme.height.header};
`;

const showAlert = (info) => {
  alert(`Hello ${info}`);
};

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header>Create plant</Header>
      <Wrapper>
        <Button color="primary">add</Button>
        <Button color="accent2" onClick={() => showAlert('Doris')}>
          display
        </Button>
        <IconButton color="accent2"></IconButton>
        <PlantForm></PlantForm>
        <LoginInput>Login</LoginInput>
        <LoginInput>Password</LoginInput>
        <LabelsList></LabelsList>
      </Wrapper>
      <Navigation></Navigation>
    </ThemeProvider>
  );
}

export default Root;
