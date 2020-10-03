import React from 'react';

import {
  SidebarConfigWrapper,
  SidebarInfoWrapper,
  SidebarMenuListWrapper,
  SidebarWrapper,
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
