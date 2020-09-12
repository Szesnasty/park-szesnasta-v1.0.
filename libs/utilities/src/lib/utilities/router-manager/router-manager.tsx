import React from 'react';
import { Users } from '@park-szesnasta/users';
import { Route, Switch } from 'react-router-dom';

export const RouterManager = () => {
  return (
    <Switch>
      <Route path={'/'} exact component={Users} />
    </Switch>
  );
};
