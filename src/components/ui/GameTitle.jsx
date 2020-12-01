import React from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import '../../fonts/zerovelo.ttf';

const useStyles = makeStyles({
  title: {
    textTransform: 'uppercase',
    display: 'inline-block',
    fontSize: 60,
    fontWeight: 525,
    fontFamily: 'ZeroVelocity',
    textShadow: '-7px 5px 4px rgba(0,0,0,0.45)',
  },
});

const GameTitle = () => {
  const classes = useStyles();
  return (
    <Typography variant="h1" align="center" className={classes.title}>
      Algorobo
    </Typography>
  );
};

export default GameTitle;
