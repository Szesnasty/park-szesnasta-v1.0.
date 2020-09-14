import React from 'react';
import { UsersManagementForm } from './../components/users-management-form';
import { UsersManagementTable } from './../components/users-management-table';

export const UsersManagement = () => {
  return (
    <>
      <UsersManagementForm />
      <UsersManagementTable />
    </>
  );
};
