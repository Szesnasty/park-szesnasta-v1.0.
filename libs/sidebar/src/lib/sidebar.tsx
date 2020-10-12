import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import styled from 'styled-components';
import { useHistory, NavLink } from 'react-router-dom';
import { Tooltip } from '@park-szesnasta/components';
import { SidebarMenu } from '@park-szesnasta/utilities';
import {
  SidebarConfigWrapper,
  SidebarInfoWrapper,
  SidebarMenuListWrapper,
  SidebarWrapper,
} from '@park-szesnasta/components';

export const Sidebar = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('user-logged');
    history.push('/login');
  };

  const RenderSidebarNavList = () => {
    return SidebarMenu.map((SidebarNavItem) => {
      return (
        <li key={SidebarNavItem.id}>
          <NavLink to={SidebarNavItem.to}>{SidebarNavItem.linkName}</NavLink>
        </li>
      );
    });
  };

  return (
    <SidebarWrapper>
      <SidebarInfoWrapper>Top</SidebarInfoWrapper>
      <SidebarMenuListWrapper>
        <ul>{RenderSidebarNavList()}</ul>
      </SidebarMenuListWrapper>
      <SidebarConfigWrapper>
        <Tooltip title={'log out'}>
          <LogoutIconStyled onClick={() => handleLogout()} />
        </Tooltip>
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
