import React from 'react';
import { Users } from '@park-szesnasta/users';
import { Route, Switch } from 'react-router-dom';
import { Routes } from './../constant/routes';

export const RouterManager = () => {
  return (
    <Switch>
      <Route path={Routes.Home.path} exact component={Users} />
    </Switch>
  );
};
