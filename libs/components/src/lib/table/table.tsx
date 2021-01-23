import React from 'react';
import MaterialTable, { MaterialTableProps } from 'material-table';

export const Table = <T extends object>(props: MaterialTableProps<T>) => {
  return <MaterialTable<T> {...props} />;
};
