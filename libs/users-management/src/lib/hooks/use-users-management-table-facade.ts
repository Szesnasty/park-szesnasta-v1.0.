import { UsersManagementQuery } from '@park-szesnasta/services';
import {
  GetUsersListResponseModel,
  CreateNewUserResponseModel,
} from '@park-szesnasta/utilities';
import { QueryResult, Query } from 'material-table';

export const useUsersManagementTableFacade = () => {
  const usersManagementQuery = new UsersManagementQuery();

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Surname', field: 'surname' },
  ];

  const getData = (query: Query<CreateNewUserResponseModel>) => {
    return new Promise<QueryResult<CreateNewUserResponseModel>>(
      (resolve, reject) => {
        usersManagementQuery
          .GetUsers({
            pageInfo: { pageSize: query.pageSize, pageNumber: query.page },
          })
          .then((result) => {
            resolve({
              // data: result.data.items,
              data: [
                {
                  id: '3123',
                  name: 'Łukasz',
                  surname: 'Ja',
                  email: 'lukasz@o2.pl',
                  password: '32',
                },
              ],
              page: result.data?.pageInfo?.pageNumber,
              totalCount: result.data?.pageInfo.total,
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
