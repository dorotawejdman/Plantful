import React from 'react';
import LoginInput from 'components/shared/Form/LoginInput';
import { ReactComponent as LoginBG } from 'assets/LoginBG.svg';
import { ReactComponent as MonkeyMask } from 'assets/plants/MonkeyMask.svg';
import { ReactComponent as Strelicja } from 'assets/plants/Strelicja.svg';
import styled from 'styled-components';
import Button from 'components/shared/Buttons/Button/Button';
import LoginFooter from 'components/dumb/LoginFooter';

const Container = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  width: 200px;
  margin: auto;
  .loginBG {
    position: absolute;
    top: -40px;
    left: 0;
  }
  .loginForm {
    margin-top: 200px;
    margin-bottom: 100px;
  }
  .appHeader {
    color: ${({ theme }) => theme.colors.white};
    z-index: 2;
    margin-top: 100px;
  }
  .plant-left {
    position: absolute;
    left: -360px;
    top: 20;
    transform: scale(1) rotate(20deg);
    z-index: 3;
  }
  .plant-right {
    position: absolute;
    right: -490px;
    top: 160px;
    z-index: 3;
    transform: scale(0.8) scaleX(-1);
  }
`;

export const Login = () => {
  return (
    <Container>
      <Strelicja className="plant-left"></Strelicja>
      <MonkeyMask className="plant-right"></MonkeyMask>
      <LoginBG className="loginBG"></LoginBG>
      <h1 className="appHeader">ROŚLINKARIUM</h1>
      <div className="loginForm">
        <LoginInput>Login</LoginInput>
        <LoginInput>Password</LoginInput>
        <Button color="accentLight">Login</Button>
      </div>
      <LoginFooter></LoginFooter>
    </Container>
  );
};
