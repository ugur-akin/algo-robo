import {makeStyles} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import utils from '../../../utils';
import SequenceRow from './SequenceRow';
import SequenceCell from './SequenceCell';
import CommandCell from './CommandCell';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: (props) =>
      `repeat(${props.numRows + 1}, ${theme.sequence.cellSize})`,
    gridTemplateColumns: (props) =>
      `repeat(${props.numCols}, ${theme.sequence.cellSize})`,
    gap: '3px',
    border: 'solid 2px rgba(0,0,0,0.7)',
    zIndex: theme.sequence.zIndex.default,
    borderRadius: '5px',
    padding: '2px',
  },
  cell: {
    borderRadius: '2px',
    border: '1px solid rgba(0,0,0,0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkgrey',
  },
  highlighted: {
    backgroundColor: '#e6dd7a',
    '& > div': {
      backgroundColor: 'inherit',
      color: '#000',
    },
  },
  focus: {
    position: 'absolute',
    top: '-5px',
    left: '5px',
    zIndex: theme.sequence.zIndex.focused,
    boxShadow: '-5px 5px 5px 2px rgba(0,0,0,0.5)',
  },
  label: {
    gridColumn: '1 / -1',
    lineHeight: theme.sequence.cellSize,
  },
}));

const getHighlightIndexForRow = (y, rowWidth, highlightIndex) => {
  const uptoRow = y * rowWidth;

  // Row has no highlighted elements
  if (uptoRow > highlightIndex) {
    return 0;
  }

  // All elements are highlighted
  if (uptoRow + rowWidth < highlightIndex) {
    return rowWidth;
  }

  // Only some elements are highlighted
  const numHighlighted = highlightIndex - uptoRow;
  return numHighlighted;
};

// TODO(Ugur): Change to grid display, and explore
//            gradients for themes/customization.

const Sequence = ({
  label,
  length,
  numRows,
  sequence,
  isSimulationFocus = false,
  simulationIndex,
}) => {
  const numCols = Math.ceil(length / numRows);
  const styleProps = {
    color: 'red',
    isSimulationFocus,
    numRows,
    numCols,
  };
  console.log(styleProps);
  const classes = useStyles(styleProps);
  return (
    <div className={clsx(classes.root, isSimulationFocus && classes.focus)}>
      <div className={classes.label}>{`${label}:`}</div>
      {utils.range(length).map((cellIdx) => {
        const highlighted = cellIdx < simulationIndex;
        const command = sequence[cellIdx];
        return (
          <div
            key={cellIdx}
            className={clsx(classes.cell, highlighted && classes.highlighted)}
          >
            {command && <CommandCell command={command} />}
          </div>
        );
      })}
    </div>
  );
};

export default Sequence;
