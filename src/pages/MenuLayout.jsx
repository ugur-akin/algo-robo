import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import bgImage from './mc-bg.png';
import GameTitle from '../components/ui/GameTitle';
import IconMenu from '../components/ui/IconMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    padding: theme.spacing(4),
  },
  titleContainer: {
    boxSizing: 'border-box',
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
}));

const MenuLayout = ({children}) => {
  const classes = useStyles();
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      className={classes.root}
    >
      <Box className={classes.titleContainer}>
        <GameTitle />
      </Box>
      <Box flexGrow={1}>{children}</Box>
      <Box display="flex" justifyContent="flex-end">
        <IconMenu />
      </Box>
    </Box>
  );
};

export default MenuLayout;
