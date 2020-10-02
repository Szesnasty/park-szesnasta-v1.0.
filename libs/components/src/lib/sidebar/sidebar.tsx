import React from 'react';
import { SidebarWrapper } from './../boxes-and-wrappers';
import { TopSidebar } from './components';

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <TopSidebar />
      <MiddleSidebar>Middle</MiddleSidebar>
      <BottomSidebar>Bottom</BottomSidebar>
    </SidebarWrapper>
  );
};
