import React from 'react';
import {Box} from '@material-ui/core';
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from '../routes';
import CenteringBox from './abs/CenteringBox';
import MainMenu from './ui/MainMenu';
import Levels from './Levels';
import GameLayout from '../layouts/GameLayout';

// TODO(Ugur):
//    Implement different resolutions
//    for different devices.

const GameWindow = () => {
  return (
    <CenteringBox id="game-window" height="100vh" width="100vw" bgcolor="coral">
      <Box width="720px" height="540px" id="game" bgcolor="lightblue">
        <GameLayout>
          <Switch>
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
