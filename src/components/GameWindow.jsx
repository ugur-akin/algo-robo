import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from '../routes';
import CenteringBox from './CenteringBox';
import MainMenu from './MainMenu';
import Levels from './Levels';

const GameWindow = () => {
  return (
    <>
      <Typography variant="h6">Welcome to Algo-Robo!</Typography>
      <CenteringBox height="80%" margin={2} bgcolor="coral">
        <Box height="80%" width="80%" id="game-window" bgcolor="lightblue">
          <Switch>
            <Route exact path="/">
              <Redirect to={routes.MAIN} />
            </Route>
            <Route path={routes.MAIN}>
              <MainMenu />
            </Route>
            <Route path={routes.LEVELS}>
              <Levels />
            </Route>
          </Switch>
        </Box>
      </CenteringBox>
    </>
  );
};

export default GameWindow;
