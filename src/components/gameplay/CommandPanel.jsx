import React, {useState} from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';
import CommandButton from './CommandButton';

const commands = {
  LEFT: 'LEFT',
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  F1: 'F1',
  F2: 'F2',
};

const CommandPanel = ({addCommand: add, deleteCommand: del}) => {
  const [sequence, setSequence] = useState('main');

  const handleSequenceChange = (event, newSequence) => setSequence(newSequence);
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="body1" align="center" display="block">
          COMMANDS
        </Typography>
      </Grid>
      <Grid item>
        <ToggleButtonGroup
          size="small"
          value={sequence}
          exclusive
          onChange={handleSequenceChange}
          aria-label="sequence selection"
        >
          <ToggleButton value="main" aria-label="Main Sequence">
            Mn
          </ToggleButton>
          <ToggleButton value="F1" aria-label="F1 Sequence">
            F1
          </ToggleButton>
          <ToggleButton value="F2" aria-label="F2 Sequence">
            F2
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container item alignItems="center" justify="center">
        <Grid item container alignItems="center" justify="center">
          <CommandButton
            command={commands.UP}
            onClick={() => add(commands.UP)}
          />
        </Grid>
        <Grid item container alignItems="center" justify="center">
          <CommandButton
            command={commands.LEFT}
            onClick={() => add(commands.LEFT)}
          />
          <CommandButton
            command={commands.DOWN}
            onClick={() => add(commands.DOWN)}
          />
          <CommandButton
            command={commands.RIGHT}
            onClick={() => add(commands.RIGHT)}
          />
        </Grid>
      </Grid>
      <Grid item container alignItems="center" justify="center" spacing={1}>
        <Grid item>
          <CommandButton
            command={commands.F1}
            onClick={() => add(commands.F1)}
            disabled={sequence !== 'main'}
          />
        </Grid>
        <Grid item>
          <CommandButton
            command={commands.F2}
            onClick={() => add(commands.F2)}
            disabled={sequence !== 'main'}
          />
        </Grid>
      </Grid>
      <Grid item container alignItems="center" justify="center" spacing={1}>
        <Grid item>
          <CommandButton command="DELETE" onClick={del} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CommandPanel;
