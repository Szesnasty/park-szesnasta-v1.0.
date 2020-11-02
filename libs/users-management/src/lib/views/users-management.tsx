import React, { useRef, useEffect } from 'react';
import { UsersManagementForm } from './../components/users-management-form';
import { UsersManagementTable } from './../components/users-management-table';

export const UsersManagement = () => {
  const tableRef = useRef(null);
  useEffect(() => {
    return () => console.log('unmount');
  }, []);
  return (
    <>
      <UsersManagementForm tableRef={tableRef} />
      <UsersManagementTable tableRef={tableRef} />
    </>
  );
};
