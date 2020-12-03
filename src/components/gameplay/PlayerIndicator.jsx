import {makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  player: {
    display: 'inline-block',
    height: '15px',
    width: '15px',
    backgroundColor: 'crimson',
    borderRadius: '50%',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const PlayerIndicator = () => {
  const classes = useStyles();
  return <span className={classes.player} />;
};

export default PlayerIndicator;
