import { actionTypes } from '../actions/action-types';

const initialState = {
  isStaticDrawerOpen: false,
  data: null,
  actionsList: [],
};

const openStaticDrawer = (state, action) => {
  return {
    ...state,
    ...action,
  };
};

export const drawerStaticReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_STATIC_DRAWER:
      return openStaticDrawer(state, action.payload);
    default:
      return state;
  }
};
