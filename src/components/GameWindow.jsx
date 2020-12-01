import React from 'react';
import {Box} from '@material-ui/core';
import {Switch, Route} from 'react-router-dom';
import routes from '../routes';
import CenteringBox from './abs/CenteringBox';
import MainMenu from './ui/MainMenu';
import Levels from './ui/Levels';
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
            <Route exact path={routes.MAIN}>
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
