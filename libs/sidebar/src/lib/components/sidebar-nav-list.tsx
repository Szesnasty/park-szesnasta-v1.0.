import React from 'react';
import { SidebarMenu } from '@park-szesnasta/utilities';
import { NavLink } from 'react-router-dom';
import { SvgIcon, SvgIconTypeMap } from '@material-ui/core';
import styled from 'styled-components';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export const SidebarNavList = () => {
  const RenderSidebarNavList = () => {
    return SidebarMenu.map((SidebarNavItem) => {
      return (
        <StyledListElement key={SidebarNavItem.id}>
          <NavLinkStyled
            exact
            activeStyle={{
              fontWeight: 'bold',
              background: 'rgb(18, 24, 32)',
            }}
            to={SidebarNavItem.to}
          >
            {SidebarNavItem.hasIcon && (
              <SvgIconStyled component={SidebarNavItem.icon} />
            )}
            {SidebarNavItem.linkName}
          </NavLinkStyled>
        </StyledListElement>
      );
    });
  };
  return <StyledUnorderedList>{RenderSidebarNavList()}</StyledUnorderedList>;
};

const StyledUnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListElement = styled.li``;

const NavLinkStyled = styled(NavLink)`
  display: grid;
  align-items: center;
  text-decoration: none;
  grid-template-columns: 4rem auto;
  color: #fff;
  ${({ theme }) => `
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  `}
`;

const SvgIconStyled = styled(SvgIcon)<{
  component: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}>`
  font-size: 2.6rem;
  ${({ theme }) => `
  color: ${theme.palette.primary.light};
  `}
`;
