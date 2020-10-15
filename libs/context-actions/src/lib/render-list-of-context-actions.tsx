import React from 'react';

import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export const RenderListOfContextActions = ({ actionsList, data }) => {
  const renderList = (actionsList, data) => {
    return (
      <List>
        {actionsList.map((item, index) => (
          <ListItem
            // onClick={() => dispatch(openDrawer(true, data, []))}
            button
            key={item.id}
          >
            <ListItemIcon>
              <DeleteOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    );
  };
  return <>{renderList(actionsList, data)}</>;
};
