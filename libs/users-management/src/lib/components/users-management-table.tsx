import React from 'react';
import MaterialTable from 'material-table';
import { UsersManagementQuery } from '@park-szesnasta/services';
import { tableIcons } from '@park-szesnasta/components';

import { GetUsersListResponseModel } from '@park-szesnasta/utilities';
import { useUsersManagementTableFacade } from './../hooks/use-users-management-table-facade';

type UsersManagementTableProps = {
  tableRef: React.MutableRefObject<any>;
};
export const UsersManagementTable = ({
  tableRef,
}: UsersManagementTableProps) => {
  const { columns } = useUsersManagementTableFacade();
  const usersManagementQuery = new UsersManagementQuery();

  if (tableRef.current != null) {
    tableRef?.current.onQueryChange();
  }

  return (
    <MaterialTable<GetUsersListResponseModel>
      tableRef={tableRef}
      icons={tableIcons}
      title="Firma"
      columns={columns}
      data={(query) =>
        new Promise((resolve, reject) => {
          usersManagementQuery
            .GetUsers()
            .then((res) => {
              resolve({
                data: res.data,
                page: 1,
                totalCount: 22,
              });
            })
            .catch((err) => reject(err));
        })
      }
    />
  );
};
