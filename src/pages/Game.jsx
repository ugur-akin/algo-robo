import React from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import bgImage from './mc-bg.png';
import CenteringBox from '../components/abs/CenteringBox';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    padding: theme.spacing(4),
  },
  levelName: {
    // fontFamily: 'ZeroVelocity',
    // fontSize: '1.6rem',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    lineHeight: '200%',
  },
  game: {
    boxSizing: 'border-box',
    padding: theme.spacing(2),
  },
}));

const Game = ({levelName}) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      className={classes.root}
    >
      <Box display="flex" minHeight="100px" height="10%">
        <Box flex="1">
          <Typography className={classes.levelName} variant="h3">
            {levelName}
          </Typography>
        </Box>
        <Box flex="1" bgcolor="darkmagenta">
          Menu Button
        </Box>
      </Box>
      <Box flex="1" display="flex" flexDirection="column" bgcolor="lightcoral">
        <Box flex="1" display="flex">
          <Box
            id="game"
            className={classes.game}
            flex="1"
            bgcolor="lightgreen"
            expand
          >
            <Box height="100%" bgcolor="cornflowerblue" />
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
