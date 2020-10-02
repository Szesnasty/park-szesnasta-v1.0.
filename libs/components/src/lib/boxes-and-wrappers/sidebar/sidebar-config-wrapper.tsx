import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type SidebarConfigWrapperProps = {
  children: React.ReactNode;
};

export const SidebarConfigWrapper: FunctionComponent = ({
  children,
}: SidebarConfigWrapperProps) => {
  return <SidebarConfigWrapperStyled>{children}</SidebarConfigWrapperStyled>;
};

const SidebarConfigWrapperStyled = styled.div``;
