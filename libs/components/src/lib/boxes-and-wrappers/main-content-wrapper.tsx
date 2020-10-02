import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type MainContentWrapperProps = {
  children: React.ReactNode;
};

export const MainContentWrapper: FunctionComponent = ({
  children,
}: MainContentWrapperProps) => {
  return <MainContentWrapperStyled>{children}</MainContentWrapperStyled>;
};

const MainContentWrapperStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  ${({ theme }) => `
  padding: ${theme.spacing(3.2)};
  `}
`;
