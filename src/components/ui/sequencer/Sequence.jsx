import {makeStyles} from '@material-ui/core';
import React from 'react';
import utils from '../../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    borderSpacing: 0,
    borderCollapse: 'collapse',
    textAlign: 'center',
    zIndex: ({isSimulationFocus}) =>
      isSimulationFocus
        ? theme.sequence.zIndex.focused
        : theme.sequence.zIndex.default,
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

const CommandCell = ({command}) => (
  <td
    style={{
      width: '25px',
      height: '25px',
      border: 'solid 1px black',
    }}
  />
);

const Row = ({length, commands}) => (
  <tr>
    {utils.range(length).map((x) => {
      const command = commands[x] || commands.EMPTY;
      return <CommandCell key={x} command={command} />;
    })}
  </tr>
);

const Sequence = ({
  name,
  length,
  numRows,
  sequence,
  isSimulationFocus,
  simulationIndex,
}) => {
  const classes = useStyles();
  const width = Math.trunc(length / numRows);
  const lastRowWidth = length % numRows || length / numRows;
  const lastRowCommands = sequence.slice(-lastRowWidth);
  return (
    <table className={classes.root}>
      <thead>
        <tr>
          <th className={classes.label} colSpan={width}>{`${name}:`}</th>
        </tr>
      </thead>
      <tbody>
        {utils.range(numRows - 1).map((y) => {
          const seqIdx = utils.from2D(0, y, width);
          return (
            <Row
              key={y}
              length={width}
              commands={sequence.slice(seqIdx, width)}
            />
          );
        })}
        <Row length={lastRowWidth} commands={lastRowCommands} />
      </tbody>
    </table>
  );
};

export default Sequence;
