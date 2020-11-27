import {Box, Button} from '@material-ui/core';
import React from 'react';
import CenteringBox from './CenteringBox';
import MenuButton from './MenuButton';

const MainMenu = ({loadLevels}) => {
  return (
    // <div className="col-6 offset-3 d-flex flex-column justify-content-center">
    //   <button
    //     onClick={loadLevels}
    //     type="button"
    //     className="btn btn-lg btn-outline-primary m-3"
    //   >
    //     Select Level
    //   </button>
    //   <button type="button" className="btn btn-lg btn-outline-primary m-3">
    //     Options
    //   </button>
    // </div>
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
        <MenuButton>Play</MenuButton>
        <MenuButton>Options</MenuButton>
        <MenuButton>About</MenuButton>
        <MenuButton>Help</MenuButton>
      </Box>
    </CenteringBox>
  );
};

export default MainMenu;
