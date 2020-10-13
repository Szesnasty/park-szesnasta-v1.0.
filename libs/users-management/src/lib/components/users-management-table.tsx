import React from 'react';
import MaterialTable from 'material-table';

import { tableIcons } from '@park-szesnasta/components';

import { CreateNewUserResponseModel } from '@park-szesnasta/utilities';
import { useUsersManagementTableFacade } from './../hooks/use-users-management-table-facade';
import { useDispatch } from 'react-redux';
import { openStaticDrawer } from '@park-szesnasta/store';
type UsersManagementTableProps = {
  tableRef: React.MutableRefObject<any>;
};
export const UsersManagementTable = ({
  tableRef,
}: UsersManagementTableProps) => {
  const dispatch = useDispatch();
  const { columns, getData } = useUsersManagementTableFacade();

  if (tableRef.current != null) {
    tableRef?.current.onQueryChange();
  }

  return (
    <MaterialTable<CreateNewUserResponseModel>
      onSelectionChange={(rowData) =>
        dispatch(
          openStaticDrawer(true, rowData, [
            { id: 1, name: 'Remove', value: 'remove' },
          ])
        )
      }
      tableRef={tableRef}
      icons={tableIcons}
      title="Firma"
      columns={columns}
      data={(query) => getData(query)}
      options={{
        paginationType: 'stepped',
        selection: true,
      }}
    />
  );
};
