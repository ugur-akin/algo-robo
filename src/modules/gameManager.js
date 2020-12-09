import {useEffect, useState} from 'react';

const GameStates = {
  LOADING: 'Loading',
  EDITING: 'Editing',
  SIMULATING: 'Simulating',
  SIMULATION_INTERRUPTED: 'SimulationInterrupted',
  SIMULATION_FAILED: 'SimulationFailed',
  SIMULATION_SUCCEEDED: 'SimulationSucceded',
};

const SIMULATION_INTERVAL = 150;

const useGameManager = () => {
  const [gameState, setGameState] = useState(GameStates.LOADING);

  // TODO(Ugur): Modify with correct simulation logic.
  const simulationSucceded = () => Math.random() < 0.4;
  const simulationFailed = () => Math.random() < 0.2;

  // ------------ Simulation Side Effect ----------------
  useEffect(() => {
    const runNextStep = () => {
      // Run next step of the simulation here.

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
          a) We want a procedural interface for the gameManager
             module and,
          b) we want to contain all the logic managing the gameState
             within the module itself.
        We provide an interface so components can interact with the
        state, but only through the procedures we expose. The interface
        will be modified/extended as more use cases manifest.  
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

    // Status Getters
    isLoading: () => {
      return gameState === GameStates.LOADING;
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
