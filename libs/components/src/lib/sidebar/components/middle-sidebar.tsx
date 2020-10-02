import React from 'react';
import styled from 'styled-components';

type MiddleSidebarProps = {
  children: React.ReactNode;
};

export const MiddleSidebar = ({ children }: MiddleSidebarProps) => {
  return <MiddleSidebarStyled>{children}</MiddleSidebarStyled>;
};

const MiddleSidebarStyled = styled.div``;
