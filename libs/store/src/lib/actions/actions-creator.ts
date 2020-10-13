import { actionTypes } from './action-types';

// DRAWER
export const openStaticDrawer = (
  isStaticDrawerOpen: boolean,
  data,
  actionsList
) => {
  return {
    type: actionTypes.OPEN_STATIC_DRAWER,
    payload: { isStaticDrawerOpen, data, actionsList },
  };
};

export const closeStaticDrawer = (isOpen) => {
  return {
    type: actionTypes.CLOSE_STATIC_DRAWER,
  };
};
