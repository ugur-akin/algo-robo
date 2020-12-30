import {useState} from 'react';

const useLevelState = ({levelLayout}) => {
  const {initPos} = levelLayout;
  const [pos, setPos] = useState(initPos);
  const [litTiles, setLitTiles] = useState([]);

  const reset = () => {
    setPos(initPos);
    setLitTiles([]);
  };

  const toggle = (tilesToToggle) => {
    setLitTiles((_prevLit) => {
      // Initialize the reducer with tiles to toggle so
      // that any new tiles are automatically included in
      // tilesSoFar.

      // Since tilesSoFar includes all the toggled tiles,
      // we can go through previously lit tiles one by one
      // and if we encounter any duplicates we know we should
      // toggle that tile off (i.e. remove it).
      const updated = _prevLit.reduce((tilesSoFar, next) => {
        if (tilesSoFar.includes(next)) {
          return tilesSoFar.filter(next);
        }
        return [...tilesSoFar, next];
      }, tilesToToggle);
      return updated;
    });
  };

  return [pos, litTiles, reset, toggle];
};

export default useLevelState;
