import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const types = {
  depr: {unlit: 'grey', lit: 'gold'},
  default: {
    unlit:
      'radial-gradient(circle, rgba(26,168,239,1) 0%, rgba(7,66,95,1) 110%);',
    lit:
      'radial-gradient(circle, rgba(198,233,251,1) 0%, rgba(26,168,239,1) 110%);',
  },
};

const useStyles = makeStyles({
  root: {
    gridRow: ({gridRow}) => `${gridRow}`,
    gridColumn: ({gridCol}) => `${gridCol}`,
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unlit: {
    background: ({type}) => types[type].unlit,
  },
  lit: {
    background: ({type}) => types[type].lit,
  },
});

// TODO(Ugur): It's probably a good idea to memoize
//             this component, will test first.

const Tile = ({type, gridRow, gridCol, lit, children}) => {
  const classes = useStyles({gridRow, gridCol, type});
  return (
    <div className={clsx(classes.root, lit ? classes.lit : classes.unlit)}>
      {children}
    </div>
  );
};

export default Tile;
