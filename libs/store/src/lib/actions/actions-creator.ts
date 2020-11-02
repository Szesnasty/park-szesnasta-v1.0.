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

//  DRAWER
export const openDrawer = (isDrawerOpen: boolean, data, actionName) => {
  return {
    type: actionTypes.OPEN_DRAWER,
    payload: { isDrawerOpen, data, actionName },
  };
};
