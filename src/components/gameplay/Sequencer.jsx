import React from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core';
import utils from '../../utils';

const useStyles = makeStyles({
  sequencer: {
    borderSpacing: 0,
    borderCollapse: 'collapse',
  },
  sequencerCell: {
    height: '25px',
    width: '25px',
    border: '2px solid black',
    backgroundColor: 'white',
  },
});

const Sequencer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item container alignItems="center" justify="space-evenly">
        <Grid item>
          <Typography variant="h6">MAIN:</Typography>

          <table className={classes.sequencer}>
            <tbody>
              <tr>
                {utils.range(4).map(() => (
                  <td className={classes.sequencerCell} />
                ))}
              </tr>
              <tr>
                {utils.range(4).map(() => (
                  <td className={classes.sequencerCell} />
                ))}
              </tr>
              <tr />
            </tbody>
          </table>
        </Grid>
        <Grid item>
          <Typography variant="h6">F1:</Typography>
          <table className={classes.sequencer}>
            <tbody>
              <tr>
                {utils.range(2).map(() => (
                  <td className={classes.sequencerCell} />
                ))}
              </tr>
              <tr>
                {utils.range(2).map(() => (
                  <td className={classes.sequencerCell} />
                ))}
              </tr>
              <tr />
            </tbody>
          </table>
        </Grid>
        <Grid item>
          <Typography variant="h6">F2:</Typography>

          <table className={classes.sequencer}>
            <tbody>
              <tr>
                {utils.range(2).map(() => (
                  <td className={classes.sequencerCell} />
                ))}
              </tr>
              <tr>
                {utils.range(2).map(() => (
                  <td className={classes.sequencerCell} />
                ))}
              </tr>
              <tr />
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sequencer;
