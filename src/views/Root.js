import UsersList from 'components/molecules/UsersListItem/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import Button from 'components/shared/Buttons/Button/Button';
import IconButton from 'components/shared/Buttons/IconButton/IconButton';
import GlobalStyles from 'styles/globalStyles';
import { theme } from 'styles/theme';

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
        <Button text="display" color="accent-1"></Button>
        <IconButton></IconButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
