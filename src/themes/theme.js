import {createMuiTheme} from '@material-ui/core';

const baseThemeSettings = {
  typography: {
    fontsize: 12,
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
