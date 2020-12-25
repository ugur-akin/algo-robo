import {makeStyles} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import utils from '../../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    backgroundColor: 'lightgrey',
    borderSpacing: 0,
    borderCollapse: 'collapse',
    textAlign: 'center',
    zIndex: theme.sequence.zIndex.default,
  },
  focus: {
    top: '-5px',
    left: '5px',
    zIndex: theme.sequence.zIndex.focused,
    boxShadow: '-5px 5px 5px 2px rgba(0,0,0,0.5)',
  },
  cell: {
    width: theme.sequence.cellSize,
    height: theme.sequence.cellSize,
    border: 'solid 1px black',
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

const CommandCell = ({command, highlighted = false}) => (
  <td
    style={{
      width: '25px',
      height: '25px',
      border: 'solid 1px black',
      backgroundColor: highlighted ? 'yellow' : 'inherit',
    }}
  />
);

const Row = ({length, commands, highlightIndex}) => (
  <tr>
    {utils.range(length).map((x) => {
      const command = commands[x] || commands.EMPTY;
      return (
        <CommandCell
          key={x}
          command={command}
          highlighted={x < highlightIndex}
        />
      );
    })}
  </tr>
);

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
            <Row
              key={y}
              length={width}
              commands={sequence.slice(seqIdx, width)}
              highlightIndex={rowHighlightIndex}
            />
          );
        })}
        <Row
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
