import { actionTypes } from './action-types';

// DRAWER
const openDrawer = (isOpen) => {
  return {
    type: actionTypes.OPEN_DRAWER,
    payload: isOpen,
  };
};
