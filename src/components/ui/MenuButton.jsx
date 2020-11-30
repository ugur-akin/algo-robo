import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import * as styles from './styles.module.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
    borderRadius: 20,
  },
}));

const MenuButton = ({children, route}) => {
  const classes = useStyles();
  console.log(styles);
  return (
    <Button
      to={route}
      component={RouterLink}
      className={classes.button}
      classes={{contained: styles.menuButton}}
      size="large"
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};

export default MenuButton;
