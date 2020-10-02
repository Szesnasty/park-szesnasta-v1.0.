import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type SidebarMenuListWrapperProps = {
  children: React.ReactNode;
};

export const SidebarMenuListWrapper: FunctionComponent = ({
  children,
}: SidebarMenuListWrapperProps) => {
  return (
    <SidebarMenuListWrapperStyled>{children}</SidebarMenuListWrapperStyled>
  );
};

const SidebarMenuListWrapperStyled = styled.div``;
