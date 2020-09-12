import React from 'react';

import { StylesProvider } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { MainTheme, RouterManager } from '@park-szesnasta/utilities';

export const App = () => {
  console.log(process.env.NX_URL_API);
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={MainTheme}>
        <ThemeProvider theme={MainTheme}>
          <CssBaseline>
            <Router>
              <RouterManager />
            </Router>
          </CssBaseline>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
