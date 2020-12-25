import {makeStyles} from '@material-ui/core';
import React from 'react';
import Sequence from './Sequence';

const commands = {
  LEFT: 'LEFT',
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  F1: 'F1',
  F2: 'F2',
};

const sequenceMain = {
  label: 'Main',
  length: 8,
  sequence: [commands.LEFT],
};

const sequenceF1 = {
  label: 'F1',
  length: 4,
  sequence: [],
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  backdrop: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: theme.sequence.color.backdropFilter,
    zIndex: theme.sequence.zIndex.backdropFilter,
  },
  sequenceContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    '& > table': {
      margin: theme.spacing(2),
    },
  },
}));

const Sequencer = ({
  isSimulating = false,
  simulLabel,
  simulIndex,
  sequences = [sequenceMain, sequenceF1],
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isSimulating && <div className={classes.backdrop} />}
      <div className={classes.sequenceContainer}>
        {sequences.map(({label, length, sequence}) => {
          const isSimulationFocus = isSimulating && simulLabel === label;
          const simulIndexProp = isSimulationFocus && simulIndex;
          return (
            <Sequence
              key={label}
              label={label}
              length={length}
              numRows={2}
              sequence={sequence}
              isSimulationFocus={isSimulationFocus}
              simulationIndex={simulIndexProp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sequencer;
