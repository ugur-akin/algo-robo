import {Box} from '@material-ui/core';
import React from 'react';
import routes from '../routes';
import CenteringBox from '../components/abs/CenteringBox';
import MenuButton from '../components/ui/MenuButton';
import MenuLayout from './MenuLayout';

const MainMenu = () => {
  return (
    <CenteringBox height="100%" minWidth="160px" width="10%">
      <Box
        id="main-menu"
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        justifyContent="start"
        width="100%"
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
