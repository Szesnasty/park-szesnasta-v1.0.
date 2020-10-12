import React from 'react';
import MaterialTable from 'material-table';

import { tableIcons } from '@park-szesnasta/components';

import { CreateNewUserResponseModel } from '@park-szesnasta/utilities';
import { useUsersManagementTableFacade } from './../hooks/use-users-management-table-facade';

type UsersManagementTableProps = {
  tableRef: React.MutableRefObject<any>;
};
export const UsersManagementTable = ({
  tableRef,
}: UsersManagementTableProps) => {
  const { columns, getData } = useUsersManagementTableFacade();

  if (tableRef.current != null) {
    tableRef?.current.onQueryChange();
  }

  return (
    <MaterialTable<CreateNewUserResponseModel>
      onSelectionChange={(rowData) => console.log(rowData)}
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
