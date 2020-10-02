import React from 'react';
import { SidebarWrapper } from './../boxes-and-wrappers';
import {
  SidebarConfigWrapper,
  SidebarInfoWrapper,
  SidebarMenuListWrapper,
} from './../boxes-and-wrappers';

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarInfoWrapper>Top</SidebarInfoWrapper>
      <SidebarMenuListWrapper>Middle</SidebarMenuListWrapper>
      <SidebarConfigWrapper>Bottom</SidebarConfigWrapper>
    </SidebarWrapper>
  );
};
