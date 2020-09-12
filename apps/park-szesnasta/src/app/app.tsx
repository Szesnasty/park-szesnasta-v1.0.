import React from 'react';
import { Users } from '@park-szesnasta/users';
import { StylesProvider } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { MainTheme } from '@park-szesnasta/utilities';

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={MainTheme}>
        <ThemeProvider theme={MainTheme}>
          <CssBaseline>
            <Users />
          </CssBaseline>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
