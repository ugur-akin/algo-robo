import React from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
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
  return (
    <Grid height="100%" container spacing={2}>
      <Grid item>
        <Typography variant="body" align="center" display="block">
          COMMANDS
        </Typography>
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
