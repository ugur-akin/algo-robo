import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    margin: 2,
    display: 'flex-item',
  },
});

const MenuButton = ({children, route}) => {
  const classes = useStyles();

  return (
    <RouterLink
      to={route}
      component={Button}
      className={classes.root}
      size="large"
      variant="outlined"
      color="primary"
    >
      {children}
    </RouterLink>
  );
};

export default MenuButton;
