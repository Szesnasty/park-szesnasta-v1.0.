import React from 'react';
import styled from 'styled-components';

type BottomSidebarProps = {
  children: React.ReactNode;
};

export const BottomSidebar = ({ children }: BottomSidebarProps) => {
  return <BottomSidebarStyled>{children}</BottomSidebarStyled>;
};

const BottomSidebarStyled = styled.div``;
