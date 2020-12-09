import React from 'react';
import {Box} from '@material-ui/core';
import {Switch, Route} from 'react-router-dom';
import routes from '../routes';
import CenteringBox from './abs/CenteringBox';
import MainMenu from '../pages/MainMenu';
import Levels from '../pages/Levels';
import MenuLayout from '../pages/MenuLayout';

// TODO(Ugur):
//    Implement different resolutions
//    for different devices.

const GameWindow = () => {
  return (
    <CenteringBox id="game-window" bgcolor="darkblue">
      <Box id="screen" width="720px" height="540px">
        <MenuLayout>
          <Switch>
            <Route exact path={routes.MAIN}>
              <MainMenu />
            </Route>
            <Route path={routes.LEVELS}>
              <Levels />
            </Route>
          </Switch>
        </MenuLayout>
      </Box>
    </CenteringBox>
  );
};

export default GameWindow;
