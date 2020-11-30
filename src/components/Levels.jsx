import {Box, Button, Divider, Paper, Typography} from '@material-ui/core';
import React from 'react';
import CenteringBox from './abs/CenteringBox';

const Levels = () => {
  return (
    <CenteringBox expand>
      <Paper elevation={3}>
        <Typography variant="h5" align="center">
          Chapter 1
        </Typography>
        <Divider />
        <Box>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </Box>
      </Paper>
    </CenteringBox>
  );
};

export default Levels;
