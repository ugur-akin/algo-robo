import {makeStyles} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import utils from '../../../utils';
import CommandCell from './CommandCell';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    backgroundColor: 'lightgrey',
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
  focus: {
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
// TODO(Ugur): Expand grid layout by
//               defining outside margins,
//               defining specific title row,
//               defining border area (for custom
//                borders w/ gradients),
//             and facilitate customization/themes.

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
    isSimulationFocus,
    numRows,
    numCols,
  };
  const classes = useStyles(styleProps);
  return (
    <div className={clsx(classes.root, isSimulationFocus && classes.focus)}>
      <div className={classes.label}>{`${label}:`}</div>
      {utils.range(length).map((cellIdx) => {
        const highlighted = cellIdx < simulationIndex;
        const next = cellIdx === simulationIndex;
        const command = sequence[cellIdx];
        return (
          <div key={cellIdx} className={classes.cell}>
            {command && (
              <CommandCell
                command={command}
                highlighted={highlighted}
                next={next}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sequence;
