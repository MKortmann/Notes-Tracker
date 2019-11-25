import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function PaperSheet() {

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={11}>
        <Box border={1} style={{borderColor: "#379B98"}}>
            <Typography variant="h5" component="h3">
              Welcome to Notes Tracker
            </Typography>
            <Typography component="p">
              Please, LogIn/SignUp to be able to store and retrieve your data.
            </Typography>
          <Box borderTop={1} style={{borderColor: "#379B98"}}>
              <Typography component="p">
                You are in test mode! All your notes are temporarily saved.
              </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
