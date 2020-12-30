import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    backgroundColor: 'darkslategrey',
  },
});

const Player = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};

export default Player;
