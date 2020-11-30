import {createMuiTheme} from '@material-ui/core';

const baseThemeSettings = {
  typography: {
    fontsize: 12,
    h1: {
      fontFamily: ['Bazaronite', 'Arial'],
      textTransform: 'uppercase',
      fontSize: 60,
      fontWeight: 525,
    },
  },
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       textTransform: 'capitalize',
  //     },
  //   },
  // },
};

const theme = createMuiTheme(baseThemeSettings);

export default theme;
