import React from 'react';
import MaterialTable from 'material-table';

import { GetUsersListResponseModel } from '@park-szesnasta/utilities';
import { useUsersManagementTableFacade } from './../hooks/use-users-management-table-facade';

export const UsersManagementTable = () => {
  const { columns, getData } = useUsersManagementTableFacade();

  return (
    <MaterialTable<GetUsersListResponseModel>
      tableRef={null}
      onSelectionChange={(data, rowData) => console.log(data)}
      icons={null}
      title="Firma"
      columns={columns}
      data={(query) => getData()}
    />
  );
};
