import React from 'react';
import {IconButton, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    border: 'solid 3.3px #000000A0',
    backgroundColor: '#00A0DF00',
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
