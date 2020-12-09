import React from 'react';
import {Box, Divider, makeStyles, Paper, Typography} from '@material-ui/core';
import LevelButton from './LevelButton';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '250px',
    width: '300px',
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
  },
  divider: {
    height: 3,
    backgroundColor: 'black',
  },
  titleContainer: {
    backgroundColor: 'lightblue',
    padding: theme.spacing(1),
  },
  bodyContainer: {
    backgroundColor: 'lightcoral',
  },
}));

const ChapterCard = ({title}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Box className={classes.titleContainer}>
        <Typography variant="h5" align="center">
          {title.toUpperCase()}
        </Typography>
      </Box>

      <Divider className={classes.divider} flexItem />
      <Box className={classes.bodyContainer} flexGrow={1} padding={2}>
        <LevelButton>1</LevelButton>
        <LevelButton>2</LevelButton>
        <LevelButton>3</LevelButton>
        <LevelButton>4</LevelButton>
        <LevelButton>5</LevelButton>
      </Box>
    </Paper>
  );
};

export default ChapterCard;
