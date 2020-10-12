import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Tooltip } from '@park-szesnasta/components';

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

  return (
    <SidebarWrapper>
      <SidebarInfoWrapper>Top</SidebarInfoWrapper>
      <SidebarMenuListWrapper>Middle</SidebarMenuListWrapper>
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
