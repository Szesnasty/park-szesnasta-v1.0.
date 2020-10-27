import { actionTypes } from '../actions/action-types';

const initialState = {
  isDrawerOpen: false,
  data: null,
  actionName: '',
};

const openDrawer = (state, action) => {
  return {
    ...state,
    ...action,
  };
};

export const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_DRAWER:
      return openDrawer(state, action.payload);
    default:
      return state;
  }
};
