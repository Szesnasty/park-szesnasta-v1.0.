import { actionTypes } from './action-types';

// STATIC DRAWER
export const openStaticDrawer = (
  isStaticDrawerOpen: boolean,
  data,
  actionsList,
  handleRefreshData?: () => void
) => {
  return {
    type: actionTypes.OPEN_STATIC_DRAWER,
    payload: { isStaticDrawerOpen, data, actionsList, handleRefreshData },
  };
};

//  DRAWER
export const openDrawer = (
  isDrawerOpen: boolean,
  data,
  actionName,
  handleRefreshData?: () => void
) => {
  return {
    type: actionTypes.OPEN_DRAWER,
    payload: { isDrawerOpen, data, actionName, handleRefreshData },
  };
};
