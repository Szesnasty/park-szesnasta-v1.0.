import { UsersManagementQuery } from '@park-szesnasta/services';
import { GetUsersListResponseModel } from '@park-szesnasta/utilities';
import { QueryResult } from 'material-table';

export const useUsersManagementTableFacade = () => {
  const usersManagementQuery = new UsersManagementQuery();

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Surname', field: 'surname' },
  ];

  const getData = (query) => {
    return new Promise<QueryResult<GetUsersListResponseModel>>(
      (resolve, reject) => {
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
      }
    );
  };
  return {
    columns,
    getData,
  };
};
