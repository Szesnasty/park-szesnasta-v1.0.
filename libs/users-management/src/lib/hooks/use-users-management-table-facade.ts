export const useUsersManagementTableFacade = () => {
  const columns = [
    { title: 'Email', field: 'email' },
    { title: 'Imię', field: 'imie' },
    { title: 'Nazwisko', field: 'nazwisko' },
  ];

  return {
    columns,
  };
};
