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
    fontSize: '1em',
  },
  highlighted: {
    backgroundColor: '#e6dd7a', // yellow
    color: '#000',
  },
  next: {
    backgroundColor: '#027CFF', // blue
    color: '#fff',
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

const CommandCell = ({command, highlighted, next}) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        classes.root,
        highlighted && classes.highlighted,
        next && classes.next,
      )}
    >
      {commandSymbols[command]}
    </div>
  );
};

export default CommandCell;
