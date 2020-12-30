import utils from '../utils';

const posUpdater = {
  LEFT: (pos) => [pos[0] - 1, pos[1]],
  UP: (pos) => [pos[0], pos[1] + 1],
  RIGHT: (pos) => [pos[0] + 1, pos[1]],
  DOWN: (pos) => [pos[0], pos[1] - 1],
};

const simulator = {
  next: (levelLayout, playerPosition, command) => {
    const newPosition = posUpdater[command](playerPosition);
    const [x, y] = newPosition;
    if (levelLayout[x] && levelLayout[x][y]) {
      return {
        isValidLevelState: true,
        newPosition,
        toggled: [utils.from2D(x, y, levelLayout.width)],
      };
    }

    return {
      isValidLevelState: false,
      newPosition,
    };
  },
};

export default simulator;
