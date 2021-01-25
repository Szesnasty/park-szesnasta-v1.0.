import React from 'react';

import List from '@material-ui/core/List';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIcon, SvgIconTypeMap } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { openStaticDrawer, openDrawer } from '@park-szesnasta/store';

export const RenderListOfContextActions = ({
  actionsList,
  data,
  handleRefreshData,
}) => {
  const dispatch = useDispatch();
  const renderList = (actionsList, data) => {
    let currentActionsList;
    data?.length > 1
      ? (currentActionsList = actionsList.filter(
          (x) => x.isForSingleItem === true
        ))
      : (currentActionsList = actionsList);

    console.log(currentActionsList);
    return (
      <List>
        {currentActionsList?.map((item, index) => (
          <ListItem
            onClick={() =>
              dispatch(openDrawer(true, data, item.value, handleRefreshData))
            }
            button
            key={item.id}
          >
            <ListItemIcon>
              <SvgIconStyled component={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    );
  };
  return <>{renderList(actionsList, data)}</>;
};

const SvgIconStyled = styled(SvgIcon)<{
  component: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}>`
  font-size: 2.6rem;
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    `}
`;
