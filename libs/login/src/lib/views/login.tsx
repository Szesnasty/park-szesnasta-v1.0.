import React from 'react';
import { LoginUserForm } from './../components/login-user-form';
import styled from 'styled-components';
export const Login = () => {
  return (
    <LoginViweStyled>
      <LoginUserForm />
    </LoginViweStyled>
  );
};

const LoginViweStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url('https://images3.alphacoders.com/812/thumb-1920-812062.png');
  background-size: cover;
  display: grid;
  justify-content: center;
  align-items: center;
`;
