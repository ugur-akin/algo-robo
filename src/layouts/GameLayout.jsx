import {Box} from '@material-ui/core';
import React from 'react';
import Header from './components/Header';

const GameLayout = ({children}) => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      bgcolor="aquamarine"
    >
      <Box id="header-container" height="20%" bgcolor="antiquewhite">
        <Header />
      </Box>
      <Box id="content-container" flexGrow={1}>
        {children}
      </Box>
    </Box>
  );
};

export default GameLayout;
