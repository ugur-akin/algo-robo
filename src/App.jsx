import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core';
import GameWindow from './components/GameWindow';
import theme from './themes/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <GameWindow />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
