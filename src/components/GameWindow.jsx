import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from '../routes';
import CenteringBox from './CenteringBox';
import MainMenu from './MainMenu';
import Levels from './Levels';
import GameLayout from '../layouts/GameLayout';

// TODO(Ugur):
//    Implement different resolutions
//    for different devices.

const GameWindow = () => {
  return (
    <CenteringBox id="game-window" height="100vh" width="100vw" bgcolor="coral">
      <Box width="1080px" height="540px" id="game" bgcolor="lightblue">
        <GameLayout>
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
        </GameLayout>
      </Box>
    </CenteringBox>
  );
};

export default GameWindow;
