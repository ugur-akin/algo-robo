import {Box} from '@material-ui/core';
import React from 'react';
import routes from '../../routes';
import CenteringBox from '../abs/CenteringBox';
import MenuButton from './MenuButton';

const MainMenu = () => {
  return (
    <CenteringBox marginLeft={4} minWidth="160px" width="10%" height="100%">
      <Box
        id="main-menu"
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        justifyContent="start"
        width="100%"
        height="60%"
      >
        <MenuButton route={routes.LEVELS}>Play</MenuButton>
        <MenuButton route={routes.CUSTOMIZE}>Customize</MenuButton>
        <MenuButton route={routes.STORE}>Store</MenuButton>
        <MenuButton route={routes.CREDITS}>Credits</MenuButton>
      </Box>
    </CenteringBox>
  );
};

export default MainMenu;
