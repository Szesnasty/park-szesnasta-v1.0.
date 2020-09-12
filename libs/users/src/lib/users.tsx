import React from 'react';

import styled from 'styled-components';

export interface UsersProps {}

export const Users = (props: UsersProps) => {
  return (
    <StyledUsers>
      <h1>Welcome to Park Szesnasta!</h1>
    </StyledUsers>
  );
};

const StyledUsers = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1c313a;
  color: #ffffff;
`;
