import {createMuiTheme} from '@material-ui/core';

const baseThemeSettings = {
  typography: {
    fontsize: 12,
  },
  sequence: {
    cellSize: '25px',
    zIndex: {
      default: 0,
      backdropFilter: 5,
      focused: 10,
    },
  },
};

const theme = createMuiTheme(baseThemeSettings);

export default theme;
