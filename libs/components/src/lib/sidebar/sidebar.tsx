import React from 'react';
import { SidebarWrapper } from './../boxes-and-wrappers';
import { TopSidebar, MiddleSidebar, BottomSidebar } from './components';

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <TopSidebar>Top</TopSidebar>
      <MiddleSidebar>Middle</MiddleSidebar>
      <BottomSidebar>Bottom</BottomSidebar>
    </SidebarWrapper>
  );
};
