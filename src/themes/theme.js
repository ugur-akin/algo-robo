import {createMuiTheme} from '@material-ui/core';

const baseThemeSettings = {
  typography: {
    fontsize: 12,
  },
  sequence: {
    cellSize: 25,
    zIndex: {
      default: 0,
      backdropElement: 5,
      focused: 10,
    },
  },
};

const theme = createMuiTheme(baseThemeSettings);

export default theme;
