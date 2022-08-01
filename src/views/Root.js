import UsersList from 'components/molecules/UsersListItem/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import Button from 'components/shared/Buttons/Button/Button';
import IconButton from 'components/shared/Buttons/IconButton/IconButton';
import GlobalStyles from 'styles/globalStyles';
import { theme } from 'styles/theme';
import FormInput from 'components/shared/Form/FormInput/FormInput';
import Header from 'components/shared/Header/Header';
import Label from 'components/shared/Label/Label';
import LabelsList from 'components/molecules/UsersListItem/LabelsList';
const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.neutral1};
`;

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <UsersList />
        <Button text="add" color="primary"></Button>
        <Button text="display" color="accent2"></Button>
        <IconButton></IconButton>
        <FormInput></FormInput>
        <Header title="Create plant"></Header>
        <LabelsList></LabelsList>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
