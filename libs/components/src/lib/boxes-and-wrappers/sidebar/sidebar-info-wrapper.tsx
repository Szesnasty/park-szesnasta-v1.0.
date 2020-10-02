import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type SidebarInfoWrapperProps = {
  children: React.ReactNode;
};

export const SidebarInfoWrapper: FunctionComponent = ({
  children,
}: SidebarInfoWrapperProps) => {
  return <SidebarInfoWrapperStyled>{children}</SidebarInfoWrapperStyled>;
};

const SidebarInfoWrapperStyled = styled.div``;
