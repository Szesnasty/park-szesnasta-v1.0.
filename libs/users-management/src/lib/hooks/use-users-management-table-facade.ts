import { UsersManagementQuery } from '@park-szesnasta/services';

export const useUsersManagementTableFacade = () => {
  const usersManagementQuery = new UsersManagementQuery();
  const columns = [
    { title: 'Email', field: 'email' },
    { title: 'Imię', field: 'imie' },
    { title: 'Nazwisko', field: 'nazwisko' },
  ];

  const getData = () => {
    return new Promise((resolve, reject) => {
      usersManagementQuery
        .GetUsers()
        .then((res) => {
          resolve({
            data: res.data,
            page: 1,
            totalCount: res.data?.length,
          });
        })
        .catch((err) => reject(err));
    });
  };

  return {
    columns,
    getData,
  };
};
