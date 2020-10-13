import { actionTypes } from './action-types';

// STATIC DRAWER
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

//  DRAWER
export const openDrawer = (isDrawerOpen: boolean, data, actionsList) => {
  return {
    type: actionTypes.OPEN_STATIC_DRAWER,
    payload: { isDrawerOpen, data, actionsList },
  };
};
