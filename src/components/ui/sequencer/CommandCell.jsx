import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles({
  root: {
    borderRadius: 'inherit',
    width: '22px',
    height: '22px',
    lineHeight: '22px',
    textAlign: 'center',
    backgroundColor: '#1B1B1B', // matte black
    color: 'white',
  },
});

const commandSymbols = {
  LEFT: '\u2b98',
  UP: '\u2b99',
  RIGHT: '\u2b9a',
  DOWN: '\u2b9b',
  F1: 'F1',
  F2: 'F2',
};

const CommandCell = ({command}) => {
  const classes = useStyles();
  return <div className={classes.root}>{commandSymbols[command]}</div>;
};

export default CommandCell;
