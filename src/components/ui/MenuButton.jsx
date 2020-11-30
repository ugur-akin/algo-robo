import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {menuButton} from '../../styles/button.module.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
    borderRadius: 20,
  },
}));

const MenuButton = ({children, route}) => {
  const classes = useStyles();
  return (
    <Button
      to={route}
      component={RouterLink}
      className={classes.button}
      classes={{root: menuButton}}
      size="large"
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};

export default MenuButton;
