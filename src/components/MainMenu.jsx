import {Box} from '@material-ui/core';
import React from 'react';
import routes from '../routes';
import CenteringBox from './CenteringBox';
import MenuButton from './MenuButton';

const MainMenu = () => {
  return (
    <CenteringBox>
      <Box
        id="main-menu"
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        justifyContent="space-evenly"
        width="50%"
        height="50%"
      >
        <MenuButton route={routes.LEVELS}>Play</MenuButton>
        <MenuButton route={routes.OPTIONS}>Options</MenuButton>
        <MenuButton route={routes.ABOUT}>About</MenuButton>
        <MenuButton route={routes.HELP}>Help</MenuButton>
      </Box>
    </CenteringBox>
  );
};

export default MainMenu;
