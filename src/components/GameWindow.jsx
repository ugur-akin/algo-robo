import React from 'react';
import {Box} from '@material-ui/core';
import {useLocation} from 'react-router-dom';
import routes from '../routes';
import CenteringBox from './CenteringBox';

const GameWindow = () => {
  const gameRoute = useLocation().pathname;

  let windowContent;
  switch (gameRoute) {
    default:
    case routes.MAIN:
      windowContent = <h3>Main</h3>;
      break;
    case routes.LEVELSELECT:
      windowContent = <h3>Level Select</h3>;
      break;
    case routes.OPTIONS:
      windowContent = <h3>Options</h3>;
      break;
  }

  return (
    <CenteringBox>
      <Box id="game-window">{windowContent}</Box>
    </CenteringBox>
  );
};

export default GameWindow;
