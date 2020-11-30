import {IconButton, makeStyles} from '@material-ui/core';
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {iconMenuButton} from '../../styles/button.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    margin: theme.spacing(0.5),
  },
  small: {
    padding: '6px',
  },
}));

const IconMenuButton = ({route, children, ...props}) => {
  const classes = useStyles();
  const routerProps = route && {component: RouterLink, to: route};
  return (
    <IconButton
      size="small"
      {...routerProps}
      classes={{root: iconMenuButton, sizeSmall: classes.small}}
      className={classes.root}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default IconMenuButton;
