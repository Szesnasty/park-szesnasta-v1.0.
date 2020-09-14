import React from 'react';
import MaterialTable from 'material-table';
import { UsersManagementQuery } from '@park-szesnasta/services';
import { GetUsersListResponseModel } from '@park-szesnasta/utilities';

export const UsersManagementTable = () => {
  const usersManagementQuery = new UsersManagementQuery();

  return (
    <MaterialTable<GetUsersListResponseModel>
      tableRef={null}
      onSelectionChange={(data, rowData) => console.log(data)}
      icons={null}
      title="Firma"
      columns={[
        { title: 'Email', field: 'email' },
        { title: 'Imię', field: 'imie' },
        { title: 'Nazwisko', field: 'nazwisko' },
      ]}
      data={(query) =>
        new Promise((resolve, reject) => {
          usersManagementQuery
            .GetUsers()
            .then((res) => {
              resolve({
                data: res.data,
                page: 1,
                totalCount: res?.totalCount,
              });
            })
            .catch((err) => reject(err));
        })
      }
      options={{
        grouping: false,
        selection: true,
      }}
    />
  );
};
