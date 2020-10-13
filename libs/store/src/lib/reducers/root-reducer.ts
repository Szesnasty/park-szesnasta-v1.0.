import { combineReducers } from 'redux';
import { drawerReducer } from './drawer-reducer';
import { StoreModel } from '@park-szesnasta/utilities';

export const rootReducer = combineReducers<StoreModel>({
  drawer: drawerReducer,
});
