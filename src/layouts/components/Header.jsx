import React from 'react';
import {Box} from '@material-ui/core';
import CenteringBox from '../../components/abs/CenteringBox';
import GameTitle from './GameTitle';
import IconMenu from './IconMenu';

const Header = () => {
  return (
    <Box
      id="header"
      component="header"
      height="100%"
      display="flex"
      flexDirection="row"
      alignItems="stretch"
    >
      <CenteringBox flexBasis="50%" flexGrow={1} alignItems="flex-end">
        <GameTitle />
      </CenteringBox>
      <CenteringBox flexBasis="30%" flexGrow={1}>
        <IconMenu />
      </CenteringBox>
    </Box>
  );
};

export default Header;
