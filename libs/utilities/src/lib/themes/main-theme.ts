import { createMuiTheme } from '@material-ui/core';
import { errorMsg, primary, secondary } from './theme-colors';

export const MainTheme = createMuiTheme({
  spacing: (x) => `${x * 1}rem`,
  palette: {
    primary: {
      light: primary.light,
      main: primary.main,
      dark: primary.dark,
      contrastText: primary.contrastText,
    },
    secondary: {
      light: secondary.light,
      main: secondary.main,
      dark: secondary.dark,
      contrastText: secondary.contrastText,
    },
    error: {
      main: errorMsg,
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14,
    htmlFontSize: 10,
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%' /* 62.5% of 16px = 10px */,
        },
        body: {
          margin: '0',
          boxSizing: 'border-box',
        },
      },
    },
  },
});
