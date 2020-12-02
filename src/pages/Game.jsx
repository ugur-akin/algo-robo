import React from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import bgImage from './mc-bg.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    padding: theme.spacing(4),
  },
}));

const Game = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      className={classes.root}
    >
      <Box display="flex" minHeight="100px" height="10%" bgcolor="antiquewhite">
        <Box flex="1">
          <Typography>Level ...</Typography>
        </Box>
        <Box flex="1">Menu Button</Box>
      </Box>
      <Box flex="1" display="flex" flexDirection="column" bgcolor="lightcoral">
        <Box flex="1" display="flex">
          <Box flex="1" id="game" bgcolor="lightgreen">
            Game
          </Box>
          <Box
            minWidth="80px"
            width="20%"
            id="command-panel"
            bgcolor="lightgrey"
          >
            {' '}
            Commands
          </Box>
        </Box>
        <Box minHeight="125px" height="15%" id="sequencer" bgcolor="darkgrey">
          Sequencer
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
