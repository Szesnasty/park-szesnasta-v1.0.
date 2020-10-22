import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { StoreModel } from '@park-szesnasta/utilities';
import { useSelector, useDispatch } from 'react-redux';
import { openStaticDrawer, openDrawer } from '@park-szesnasta/store';
import { RenderActions } from '@park-szesnasta/context-actions';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const Drawer = () => {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { isDrawerOpen, data } = useSelector(
    (state: StoreModel) => state.drawer
  );
  const { isStaticDrawerOpen } = useSelector(
    (state: StoreModel) => state.drawerStatic
  );

  useEffect(() => {
    if (isStaticDrawerOpen && isDrawerOpen) {
      dispatch(openStaticDrawer(false, null, []));
    }
  }, [isStaticDrawerOpen, isDrawerOpen]);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={isDrawerOpen}
      onClose={() => dispatch(openDrawer(false, null, []))}
      onOpen={() => dispatch(openDrawer(true, null, []))}
    >
      <div style={{ minWidth: '45vw' }}>
        <RenderActions />
      </div>
    </SwipeableDrawer>
  );
};
