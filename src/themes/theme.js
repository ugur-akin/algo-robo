import {createMuiTheme} from '@material-ui/core';

const baseThemeSettings = {
  typography: {
    fontsize: 12,
  },
  sequence: {
    cellSize: 25,
    zIndex: {
      default: 0,
      backdropFilter: 5,
      focused: 10,
    },
    color: {
      backdropFilter: 'rbga(0,0,0,0.25)',
    },
  },
};

const theme = createMuiTheme(baseThemeSettings);

export default theme;
