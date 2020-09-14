import React from 'react';
import MaterialTable from 'material-table';
import { UsersManagementQuery } from '@park-szesnasta/services';
import { tableIcons } from '@park-szesnasta/components';

import { GetUsersListResponseModel } from '@park-szesnasta/utilities';
import { useUsersManagementTableFacade } from './../hooks/use-users-management-table-facade';

export const UsersManagementTable = () => {
  const { columns } = useUsersManagementTableFacade();
  const usersManagementQuery = new UsersManagementQuery();
  return (
    <MaterialTable<GetUsersListResponseModel>
      tableRef={null}
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
                totalCount: res.data.length,
              });
            })
            .catch((err) => reject(err));
        })
      }
    />
  );
};
