import React from 'react';
import {Button} from '@material-ui/core';

const icons = {
  LEFT: '<',
  UP: '^',
  RIGHT: '>',
  DOWN: 'v',
  F1: 'F1',
  F2: 'F2',
  DELETE: 'DELETE',
};

const CommandButton = ({command, ...props}) => {
  //   return (
  //     <Button component="button" variant="contained" size="small" color="primary">
  //       {icons[command]}
  //     </Button>
  //   );
  return (
    <button type="button" onClick={() => console.log(command)} {...props}>
      {icons[command]}
    </button>
  );
};

export default CommandButton;
