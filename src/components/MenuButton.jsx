import {Button, makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    margin: 2,
    display: 'flex-item',
  },
});

const MenuButton = ({children}) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      size="large"
      variant="outlined"
      color="primary"
    >
      {children}
    </Button>
  );
};

export default MenuButton;
