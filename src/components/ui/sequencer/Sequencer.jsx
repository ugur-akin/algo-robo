import {makeStyles} from '@material-ui/core';
import React from 'react';
import Sequence from './Sequence';

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
    backgroundColor: 'rgba(0,0,0,0.25)',
    zIndex: theme.sequence.zIndex.backdropFilter,
  },
  sequenceContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const Sequencer = ({
  isSimulating = false,
  focusedSequence,
  simulationIndices,
  sequences,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isSimulating && <div className={classes.backdrop} />}
      <div className={classes.sequenceContainer}>
        {sequences.map(({label, length, sequence}, seqIdx) => {
          const isSimulationFocus = isSimulating && focusedSequence === label;
          const simulIndexProp = isSimulating && simulationIndices[seqIdx];
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
