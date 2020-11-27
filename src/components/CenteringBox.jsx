import React from 'react';
import {Box} from '@material-ui/core';

const CenteringBox = React.forwardRef(({children, ...props}, ref) => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});

export default CenteringBox;
