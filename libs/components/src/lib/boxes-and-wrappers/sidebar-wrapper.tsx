import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type SidebarWrapperProps = {
  children: React.ReactNode;
};

export const SidebarWrapper: FunctionComponent = ({
  children,
}: SidebarWrapperProps) => {
  return <SidebarWrapperStyled>{children}</SidebarWrapperStyled>;
};

const SidebarWrapperStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-auto-rows: 1fr 3fr 1fr;
  ${({ theme }) => `
  background: ${theme.palette.primary.main};
  
  `}
`;
