import React from 'react';
import {IconButton, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    border: 'solid 3.3px rgba(0,0,0,0.5)',
    backgroundColor: 'rgb(0,160,223)',
  },
});

const LevelButton = ({children}) => {
  const classes = useStyles();
  return (
    <IconButton variant="contained" className={classes.root}>
      {children}
    </IconButton>
  );
};

export default LevelButton;
