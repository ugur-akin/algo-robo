import React, {useEffect} from 'react';
import useGameManager from './gameManager';

const GameManagerExample = () => {
  const gameManager = useGameManager();

  useEffect(() => {
    let ti;
    if (gameManager.levelIsLoading()) {
      ti = setTimeout(() => {
        gameManager.endLoadingStage();
      }, 1250);
    }
    return () => {
      clearTimeout(ti);
    };
  }, [gameManager]);

  const beforeSimulationScreen = (
    <div>
      This is where the user enters commands. <br />
      <button type="button" onClick={gameManager.startSimulation}>
        Play
      </button>
    </div>
  );

  const duringSimulationScreen = (
    <div>
      This is where the user can manipulate simulation (e.g.
      pause/stop/fforward) <br />
      <button type="button" onClick={gameManager.stopSimulation}>
        Stop
      </button>
    </div>
  );

  const successScreen = (
    <div>
      Dazzling! <br />
      <button type="button" onClick={() => {}}>
        Next
      </button>
      <button type="button" onClick={gameManager.restartLevel}>
        Restart
      </button>
    </div>
  );
  const failureScreen = (
    <div>
      Good thing about robots is that they are expendable :O <br />
      <button type="button" onClick={gameManager.restartLevel}>
        Restart
      </button>
    </div>
  );

  if (gameManager.awaitingSimulationStart()) {
    return beforeSimulationScreen;
  }
  if (gameManager.isSimulating()) {
    return duringSimulationScreen;
  }
  if (gameManager.simulationFailed()) {
    return failureScreen;
  }
  if (gameManager.simulationSucceded()) {
    return successScreen;
  }

  // Default, level is loading:
  return <div>Loding...</div>;
};

export default GameManagerExample;
