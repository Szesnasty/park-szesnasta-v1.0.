import React from 'react';
import { UsersManagement } from '@park-szesnasta/users-management';
import { Login } from '@park-szesnasta/login';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Routes } from '@park-szesnasta/utilities';

export const RouterManager = () => {
  const loggedIn = true;

  return (
    <Switch>
      <>
        <Route path={Routes.Login.path} exact component={Login} />
        {loggedIn ? (
          <>
            <Route
              path={Routes.Home.path}
              exact
              component={() => <h1>Home</h1>}
            />
            <Route
              path={Routes.UsersManagement.path}
              exact
              component={UsersManagement}
            />
          </>
        ) : (
          <>
            <Redirect to={Routes.Login.path} />
          </>
        )}
      </>
    </Switch>
  );
};
