import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreModel, usesrsMenagementActions } from '@park-szesnasta/utilities';
import {
  USERS_MANAGEMENT_DELETE,
  USERS_MANAGEMENT_EDIT,
} from '@park-szesnasta/utilities';

export const RenderActions = () => {
  const { data, actionName, handleRefreshData } = useSelector(
    (state: StoreModel) => state.drawer
  );
  console.log(data);
  console.log(actionName);
  switch (actionName) {
    case USERS_MANAGEMENT_DELETE:
      return <div onClick={() => handleRefreshData()}>Delete</div>;

    case USERS_MANAGEMENT_EDIT:
      return <div>Edit</div>;
    default:
      return <p>Akcja</p>;
  }
};
