import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2,2,2),
    marginTop: "10px",
    backgroundColor: "#00474F",
    color: "white"
  },
  smallnotes: {
    // padding: theme.spacing(3, 2,2,2),
    marginTop: "10px",
    backgroundColor: 'rgba(0,212,255,0.5)',
    color: "black"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={8}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Welcome to Notes Tracker
          </Typography>
          <Typography component="p">
            Please, LogIn/SignUp to be able to store and retrieve your data.
          </Typography>
        </Paper>
        <Paper className={classes.smallnotes}>
          <Typography component="p">
            You are in test mode! All your notes are temporarily saved.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
