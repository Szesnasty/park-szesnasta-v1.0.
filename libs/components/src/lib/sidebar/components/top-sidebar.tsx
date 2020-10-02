import React from 'react';
import styled from 'styled-components';

type TopSidebarProps = {
  children: React.ReactNode;
};

export const TopSidebar = ({ children }: TopSidebarProps) => {
  return <TopSidebarStyled>{children}</TopSidebarStyled>;
};

const TopSidebarStyled = styled.div``;
