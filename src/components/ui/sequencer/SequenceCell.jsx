import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import CommandCell from './CommandCell';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.sequence.cellSize,
    height: theme.sequence.cellSize,
    textAlign: 'center',
    borderRadius: '2px',
    border: '1px solid rgba(0,0,0,0.75)',
    backgroundColor: 'darkgrey',
  },
  highlighted: {
    backgroundColor: 'rgb(240, 222, 84)',
  },
}));

const SequenceCell = ({command, highlighted}) => {
  const classes = useStyles();
  return (
    <td className={clsx(classes.root, highlighted && classes.highlighted)}>
      {command && <CommandCell command={command} />}
    </td>
  );
};

export default SequenceCell;
