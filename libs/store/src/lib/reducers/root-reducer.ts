import { combineReducers } from 'redux';
import { drawerStaticReducer } from './drawer-reducer';
import { StoreModel } from '@park-szesnasta/utilities';

export const rootReducer = combineReducers<StoreModel>({
  drawerStatic: drawerStaticReducer,
});
