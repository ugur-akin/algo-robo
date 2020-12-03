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
  DELETE: 'DELETE',
};

const CommandPanel = () => {
  const [sequence, setSequence] = useState('main');

  const handleSequenceChange = (event, newSequence) => setSequence(newSequence);
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="body" align="center" display="block">
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
            Main
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
          <CommandButton command={commands.UP} />
        </Grid>
        <Grid item container alignItems="center" justify="center">
          <CommandButton command={commands.LEFT} />
          <CommandButton command={commands.DOWN} />
          <CommandButton command={commands.RIGHT} />
        </Grid>
      </Grid>
      <Grid item container alignItems="center" justify="center" spacing={1}>
        <Grid item>
          <CommandButton command={commands.F1} />
        </Grid>
        <Grid item>
          <CommandButton command={commands.F2} />
        </Grid>
      </Grid>
      <Grid item container alignItems="center" justify="center" spacing={1}>
        <Grid item>
          <CommandButton command={commands.DELETE} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CommandPanel;
