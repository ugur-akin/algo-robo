import {Box, makeStyles} from '@material-ui/core';
import React from 'react';
import Header from './components/Header';
import bgImage from './mc-bg.png';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

const GameLayout = ({children}) => {
  const classes = useStyles();
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      className={classes.root}
    >
      <Box id="header-container" height="20%">
        <Header />
      </Box>
      <Box id="content-container" flexGrow={1}>
        {children}
      </Box>
    </Box>
  );
};

export default GameLayout;
