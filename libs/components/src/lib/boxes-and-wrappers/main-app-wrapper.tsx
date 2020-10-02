import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';

type MainAppWrapperProps = {
  children: React.ReactNode;
};

export const MainAppWrapper: FunctionComponent = ({
  children,
}: MainAppWrapperProps) => {
  return <MainAppWrapperStyled>{children}</MainAppWrapperStyled>;
};

const MainAppWrapperStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 22rem auto;
`;
