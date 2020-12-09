import React from 'react';
import {Box} from '@material-ui/core';

const CenteringBox = React.forwardRef(
  ({children, expand = false, ...props}, ref) => {
    const expandProps = expand ? {height: '100%', width: '100%'} : {};

    return (
      <Box
        {...expandProps}
        display="flex"
        alignItems="center"
        justifyContent="center"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

export default CenteringBox;
