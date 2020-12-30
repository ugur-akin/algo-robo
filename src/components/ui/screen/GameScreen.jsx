import {makeStyles} from '@material-ui/core';
import React from 'react';
import utils from '../../../utils';
import Player from './Player';
import Tile from './Tile';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'darkgrey',
    borderRadius: '5px',
    maxWidth: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  platform: {
    display: 'grid',
    gridTemplateRows: ({height}) => `repeat(${height}, 30px)`,
    gridTemplateColumns: ({width}) => `repeat(${width}, 30px)`,
    gap: '2px',
  },
});

const sampleTiles = {
  0: {
    0: 'default',
    1: 'default',
    2: 'default',
  },
  1: {
    1: 'default',
    2: 'default',
    3: 'default',
  },
  2: {
    3: 'default',
  },
  3: {
    3: 'default',
  },
  4: {
    3: 'default',
    4: 'default',
  },
};

const GameScreen = ({
  width = 5,
  height = 5,
  tiles = sampleTiles,
  playerPos = [0, 0],
}) => {
  const classes = useStyles({width, height});
  return (
    <div className={classes.root}>
      <div className={classes.platform}>
        {Object.keys(tiles).map((y) =>
          Object.keys(tiles[y]).map((x) => {
            const numX = Number(x);
            const numY = Number(y);
            const type = tiles[y][x];
            const lit = !!Math.round(Math.random());
            return (
              <Tile
                key={utils.from2D(numX, numY, width)}
                gridRow={height - numY}
                gridCol={numX + 1}
                type={type}
                lit={lit}
              >
                {playerPos[0] === numX && playerPos[1] === numY && <Player />}
              </Tile>
            );
          }),
        )}
      </div>
    </div>
  );
};

export default GameScreen;
