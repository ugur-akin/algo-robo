import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import utils from '../../utils';
import CenteringBox from '../abs/CenteringBox';

const levelLayout = {
  width: 5,
  height: 5,
  tiles: {
    0: [0, 1, 2],
    1: [2],
    2: [2],
    3: [2, 3, 4],
  },
};

const useStyles = makeStyles({
  platform: {
    borderSpacing: '0',
    borderCollapse: 'collapse',
  },
  cell: {
    height: '20px',
    width: '20px',
    border: '1px solid black',
    textAlign: 'center',
  },
});

const GameScreen = ({pos = [2, 2]}) => {
  const {width: numCols, height: numRows, tiles} = levelLayout;
  const classes = useStyles();
  return (
    <CenteringBox expand>
      <table className={classes.platform}>
        <tbody>
          {utils
            .range(numRows)
            .reverse() // Invert Y axis (i.e 0 is bottom)
            .map((row) => (
              <tr key={row}>
                {utils.range(numCols).map((col) => (
                  <td
                    key={col}
                    className={tiles[row]?.includes(col) ? classes.cell : null}
                  >
                    {pos[0] === row && pos[1] === col && 'P'}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </CenteringBox>
  );
};

export default GameScreen;
