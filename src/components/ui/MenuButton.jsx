import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginBottom: '16px',
    display: 'flex-item',
  },
});

const MenuButton = ({children, route}) => {
  const classes = useStyles();

  return (
    <Button
      to={route}
      component={RouterLink}
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
