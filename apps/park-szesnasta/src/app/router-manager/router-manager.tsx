import React from 'react';
import { UsersManagement } from '@park-szesnasta/users-management';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '@park-szesnasta/utilities';

export const RouterManager = () => {
  return (
    <Switch>
      <Route path={Routes.Home.path} exact component={() => <h1>Home</h1>} />
      <Route
        path={Routes.UsersManagement.path}
        exact
        component={UsersManagement}
      />
    </Switch>
  );
};
