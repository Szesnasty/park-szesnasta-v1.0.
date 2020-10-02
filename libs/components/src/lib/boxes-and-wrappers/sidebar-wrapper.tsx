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
  ${({ theme }) => `
  padding: ${theme.spacing(3.2)};
  background: ${theme.palette.primary.dark};
  `}
`;
