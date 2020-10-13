import { combineReducers } from 'redux';
import { drawerStaticReducer } from './drawer-static-reducer';
import { drawerReducer } from './drawer-reducer';
import { StoreModel } from '@park-szesnasta/utilities';

export const rootReducer = combineReducers<StoreModel>({
  drawerStatic: drawerStaticReducer,
  drawer: drawerReducer,
});
