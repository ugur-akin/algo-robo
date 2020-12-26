import {makeStyles} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import utils from '../../../utils';
import SequenceRow from './SequenceRow';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'lightgrey',
    borderSpacing: '3px',
    border: 'solid 1px black',
    zIndex: theme.sequence.zIndex.default,
    borderRadius: '5px',
    padding: '2px',
  },
  focus: {
    top: '-5px',
    left: '5px',
    zIndex: theme.sequence.zIndex.focused,
    boxShadow: '-5px 5px 5px 2px rgba(0,0,0,0.5)',
  },
  label: {
    textAlign: 'left',
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
  const classes = useStyles({isSimulationFocus});
  const width = Math.trunc(length / numRows);
  const lastRowWidth = length % numRows || length / numRows;
  const lastRowCommands = sequence.slice(-lastRowWidth);
  return (
    <table className={clsx(classes.root, isSimulationFocus && classes.focus)}>
      <thead>
        <tr>
          <th className={classes.label} colSpan={width}>{`${label}:`}</th>
        </tr>
      </thead>
      <tbody>
        {utils.range(numRows - 1).map((y) => {
          const seqIdx = utils.from2D(0, y, width);
          const rowHighlightIndex = getHighlightIndexForRow(
            y,
            width,
            simulationIndex,
          );
          return (
            <SequenceRow
              key={y}
              length={width}
              commands={sequence.slice(seqIdx, width)}
              highlightIndex={rowHighlightIndex}
            />
          );
        })}
        <SequenceRow
          length={lastRowWidth}
          commands={lastRowCommands}
          highlightIndex={getHighlightIndexForRow(
            numRows - 1,
            width,
            simulationIndex,
          )}
        />
      </tbody>
    </table>
  );
};

export default Sequence;
