import React from 'react';
import {Box, Typography} from '@material-ui/core';
import CenteringBox from '../../components/abs/CenteringBox';

const Header = () => {
  return (
    <Box
      id="header"
      component="header"
      height="100%"
      display="flex"
      flexDirection="row"
      alignItems="stretch"
      bgcolor="indianred"
    >
      <CenteringBox flexBasis="50%" flexGrow={1} bgcolor="lightgreen">
        <Typography variant="h3" align="center">
          Logo/Title
        </Typography>
      </CenteringBox>
      <Box flexBasis="20%" flexGrow={1} />
      <CenteringBox flexBasis="30%" flexGrow={1} bgcolor="darkseagreen">
        <Typography variant="h4">Icon Buttons</Typography>
      </CenteringBox>
    </Box>
  );
};

export default Header;
