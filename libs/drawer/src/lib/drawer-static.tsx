import React, { useEffect } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useSelector, useDispatch } from 'react-redux';
import { StoreModel } from '@park-szesnasta/utilities';
import { openStaticDrawer, openDrawer } from '@park-szesnasta/store';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  })
);

export const DrawerStatic = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const { isStaticDrawerOpen, data, actionsList } = useSelector(
    (state: StoreModel) => state.drawerStatic
  );

  useEffect(() => {
    if (data?.length === 0 && isStaticDrawerOpen) {
      dispatch(openStaticDrawer(false, [], []));
    }
  }, [data, isStaticDrawerOpen]);

  const renderList = (actionsList, data) => {
    return (
      <List>
        {actionsList.map((item, index) => (
          <ListItem
            onClick={() => dispatch(openDrawer(true, data, []))}
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
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={isStaticDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {renderList(actionsList, data)}
      </Drawer>
    </div>
  );
};
