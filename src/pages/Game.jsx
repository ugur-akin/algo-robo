import React, {useState} from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import bgImage from './mc-bg.png';
import CenteringBox from '../components/abs/CenteringBox';
import CommandPanel from '../components/gameplay/CommandPanel';
import Sequencer from '../components/gameplay/Sequencer';
import GameScreen from '../components/gameplay/GameScreen';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    padding: theme.spacing(4),
  },
  levelName: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    lineHeight: '200%',
  },
  container: {
    boxSizing: 'border-box',
    padding: theme.spacing(2),
  },
  gamePanelContainer: {},
  commandPanelContainer: {},
}));

const Game = ({levelName}) => {
  const classes = useStyles();
  const [mainSequence, setMainSequence] = useState([]);

  const addCommand = (command) => {
    setMainSequence((prevSequence) => [...prevSequence, command]);
  };

  const deleteCommand = () => {
    setMainSequence((prevSequence) => prevSequence.slice(0, -1));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      className={classes.root}
    >
      <Box display="flex" minHeight="100px" height="10%">
        <Box flex="1">
          <Typography className={classes.levelName} variant="h3">
            {levelName}
          </Typography>
        </Box>
        <Box flex="1" bgcolor="darkmagenta">
          Menu Button
        </Box>
      </Box>
      <Box flex="1" display="flex" flexDirection="column" bgcolor="lightcoral">
        <Box flex="1" display="flex">
          <Box
            id="game-container"
            className={`${classes.container} ${classes.gamePanelContainer}`}
            flex="1"
            bgcolor="lightgreen"
          >
            <GameScreen />
          </Box>
          <CenteringBox
            id="command-panel-container"
            className={`${classes.container} ${classes.commandPanelContainer}`}
            minWidth="80px"
            width="20%"
            bgcolor="lightgrey"
          >
            <CommandPanel
              addCommand={addCommand}
              deleteCommand={deleteCommand}
            />
          </CenteringBox>
        </Box>
        <CenteringBox
          minHeight="125px"
          height="15%"
          id="sequencer-container"
          bgcolor="darkgrey"
        >
          <Sequencer main={mainSequence} />
        </CenteringBox>
      </Box>
    </Box>
  );
};

export default Game;
