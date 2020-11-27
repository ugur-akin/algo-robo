import React from 'react';
import {Box} from '@material-ui/core';

const CenteringBox = React.forwardRef(({children, ...props}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" {...props}>
      {children}
    </Box>
  );
});

export default CenteringBox;
