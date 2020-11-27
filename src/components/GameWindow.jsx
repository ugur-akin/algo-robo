import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {useLocation} from 'react-router-dom';
import routes from '../routes';
import CenteringBox from './CenteringBox';
import MainMenu from './MainMenu';

const GameWindow = () => {
  const gameRoute = useLocation().pathname;

  let windowContent;
  switch (gameRoute) {
    default:
    case routes.MAIN:
      windowContent = <MainMenu />;
      break;
    case routes.LEVELSELECT:
      windowContent = <h3>Level Select</h3>;
      break;
    case routes.OPTIONS:
      windowContent = <h3>Options</h3>;
      break;
  }

  return (
    <>
      <Typography variant="h6">Welcome to Algo-Robo!</Typography>
      <CenteringBox height="80%" margin={2} bgcolor="coral">
        <Box height="80%" width="80%" id="game-window" bgcolor="lightblue">
          {windowContent}
        </Box>
      </CenteringBox>
    </>
  );
};

export default GameWindow;
