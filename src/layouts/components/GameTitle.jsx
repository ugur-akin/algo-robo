import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import '../../fonts/zerovelo.ttf';

const useStyles = makeStyles({
  title: {
    textTransform: 'uppercase',
    fontSize: 60,
    fontWeight: 525,
    fontFamily: 'ZeroVelocity',
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
