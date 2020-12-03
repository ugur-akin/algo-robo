import React from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import utils from '../../utils';

const Sequencer = () => {
  return (
    <Grid container>
      <Grid item container alignItems="center" justify="space-evenly">
        <Grid item>
          <Typography variant="h6">MAIN:</Typography>

          <Box display="flex">
            {utils.range(8).map((i) => (
              <Box
                key={i}
                height="25px"
                width="25px"
                border="2px solid black"
                bgcolor="white"
              />
            ))}
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6">F1:</Typography>
          <Box display="flex">
            {utils.range(4).map((i) => (
              <Box
                key={i}
                height="25px"
                width="25px"
                border="2px solid black"
                bgcolor="white"
              />
            ))}
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h6">F2:</Typography>

          <Box display="flex">
            {utils.range(4).map((i) => (
              <Box
                key={i}
                height="25px"
                width="25px"
                border="2px solid black"
                bgcolor="white"
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sequencer;
