import {useEffect, useState} from 'react';

const GameStates = {
  LOADING: 'Loading',
  EDITING: 'Editing',
  SIMULATING: 'Simulating',
  SIMULATION_INTERRUPTED: 'SimulationInterrupted',
  SIMULATION_FAILED: 'SimulationFailed',
  SIMULATION_SUCCEEDED: 'SimulationSucceded',
};

const SIMULATION_INTERVAL = 1000;

const useGameManager = () => {
  const [gameState, setGameState] = useState(GameStates.LOADING);

  // TODO(Ugur): Modify with correct simulation logic.
  const simulationSucceded = () => {
    const rnd = Math.random();
    console.log(`Rolled ${rnd} for success.`);
    return rnd < 0.1;
  };
  const simulationFailed = () => {
    const rnd = Math.random();
    console.log(`Rolled ${rnd} for failure.`);
    return rnd < 0.05;
  };

  // ------------ Simulation Side Effect ----------------
  useEffect(() => {
    let step = 1;
    const runNextStep = () => {
      // Run next step of the simulation here.
      console.log(`Simulating step ${step}`);
      step += 1;

      // After each step, check following:
      if (simulationSucceded()) {
        setGameState(GameStates.SIMULATION_SUCCEEDED);
      } else if (simulationFailed()) {
        setGameState(GameStates.SIMULATION_FAILED);
      }
    };

    let ti;
    if (gameState === GameStates.SIMULATING) {
      ti = setInterval(runNextStep, SIMULATION_INTERVAL);
    }
    return () => {
      clearInterval(ti);
    };
  }, [gameState, setGameState]);

  // ---------------------------------------------

  // ---------------- INTERFACE -----------------------
  const gameManagerInterface = {
    /*
     NOTE(Ugur): 
        The motivation behind this interface is that:
          a) We want to encourage a procedural workflow
             for the use of this module through an interface
             with names that better reflect state changes
             and their purpose,
          b) we want to contain all the logic managing 
             the gameState within the module itself.
        We provide an interface so components can interact with the
        state, but only through the procedures we expose. The interface
        can or will be modified/extended as more use cases manifest.  
     */

    // Status Setters
    endLoadingStage: () => {
      setGameState(GameStates.EDITING);
    },
    startSimulation: () => {
      setGameState(GameStates.SIMULATING);
    },
    stopSimulation: () => {
      setGameState(GameStates.SIMULATION_INTERRUPTED);
    },
    restartLevel: () => {
      setGameState(GameStates.LOADING);
    },

    // Status Getters
    levelIsLoading: () => {
      return gameState === GameStates.LOADING;
    },
    awaitingSimulationStart: () => {
      return gameState === GameStates.EDITING;
    },
    isSimulating: () => {
      return gameState === GameStates.SIMULATING;
    },
    simulationSucceded: () => {
      return gameState === GameStates.SIMULATION_SUCCEEDED;
    },
    simulationFailed: () => {
      return gameState === GameStates.SIMULATION_FAILED;
    },
  };
  // ---------------------------------------------------

  return gameManagerInterface;
};

export default useGameManager;
