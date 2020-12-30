import {makeStyles} from '@material-ui/core';
import React from 'react';
import utils from '../../../utils';
import Player from './Player';
import Tile from './Tile';

const useStyles = makeStyles({
  root: {
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

const GameScreen = ({width, height, tiles, playerPos, litTiles}) => {
  const classes = useStyles({width, height});
  return (
    <div className={classes.root}>
      <div className={classes.platform}>
        {Object.keys(tiles).map((y) =>
          Object.keys(tiles[y]).map((x) => {
            const numX = Number(x);
            const numY = Number(y);
            const type = tiles[y][x];
            const lit = litTiles.includes(utils.from2D(numX, numY, width));
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
