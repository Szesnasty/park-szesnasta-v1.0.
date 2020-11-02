import React from 'react';
import { UsersManagement } from '@park-szesnasta/users-management';
import { Login } from '@park-szesnasta/login';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Routes } from '@park-szesnasta/utilities';
import { MainAppWrapper, MainContentWrapper } from '@park-szesnasta/components';
import { Sidebar } from '@park-szesnasta/sidebar';

export const RouterManager = () => {
  // const loggedIn = localStorage.getItem('user-logged');
  const loggedIn = true;
  const location = useLocation();

  return (
    <Switch>
      <>
        <Route path={Routes.Login.path} exact component={Login} />
        {loggedIn ? (
          <MainAppWrapper>
            {location.pathname !== Routes.Login.path && <Sidebar />}
            <MainContentWrapper>
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
            </MainContentWrapper>
          </MainAppWrapper>
        ) : (
          <>
            <Redirect to={Routes.Login.path} />
          </>
        )}
      </>
    </Switch>
  );
};
