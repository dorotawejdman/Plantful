import React from 'react';
import LoginInput from 'components/shared/Form/LoginInput';
import { ReactComponent as LoginBG } from 'assets/LoginBG.svg';
import styled from 'styled-components';
import Button from 'components/shared/Buttons/Button/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  margin: auto;
  .loginBG {
    position: absolute;
    top: -10px;
    left: 0;
  }
  .loginForm {
    margin-top: 200px;
  }
  .appHeader {
    color: ${({ theme }) => theme.colors.white};
    z-index: 2;
    margin-top: 100px;
  }
`;

export const Login = () => {
  return (
    <Container>
      <LoginBG className="loginBG"></LoginBG>
      <h1 className="appHeader">ROŚLINKARIUM</h1>
      <div className="loginForm">
        <LoginInput>Login</LoginInput>
        <LoginInput>Password</LoginInput>
        <Button color="primary">Login</Button>
      </div>
    </Container>
  );
};
