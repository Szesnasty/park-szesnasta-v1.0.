import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import styled from 'styled-components';

import {
  SidebarConfigWrapper,
  SidebarInfoWrapper,
  SidebarMenuListWrapper,
  SidebarWrapper,
} from '@park-szesnasta/components';

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarInfoWrapper>Top</SidebarInfoWrapper>
      <SidebarMenuListWrapper>Middle</SidebarMenuListWrapper>
      <SidebarConfigWrapper>
        <LogoutIconStyled />
      </SidebarConfigWrapper>
    </SidebarWrapper>
  );
};

const LogoutIconStyled = styled(ExitToAppOutlinedIcon)`
  font-size: 3.6rem;
  cursor: pointer;
  ${({ theme }) => `
  color: ${theme.palette.primary.light};
  
  `}
`;
