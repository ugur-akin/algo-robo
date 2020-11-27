import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MuiThemeProvider, Typography} from '@material-ui/core';
import GameWindow from './components/GameWindow';
import routes from './routes';
import theme from './themes/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Typography variant="h2">Welcome to Algo-Robo!</Typography>
        <Switch>
          <Route exact path="/">
            <GameWindow route={routes.MAIN} />
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
