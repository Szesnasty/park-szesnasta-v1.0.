import React, { useRef } from 'react';
import { UsersManagementForm } from './../components/users-management-form';
import { UsersManagementTable } from './../components/users-management-table';

export const UsersManagement = () => {
  const tableRef = useRef(null);
  return (
    <>
      <UsersManagementForm tableRef={tableRef} />
      <UsersManagementTable tableRef={tableRef} />
    </>
  );
};
