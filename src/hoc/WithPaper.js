import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// USED TO MAKE A PAPER STYLE FOR ITEMS

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(3, 2),
    padding: theme.spacing(1, 1,1,1),
    // margin: "10px",
    margin: "5px",
    marginLeft: "5px",
    marginRight: "5px",
    color: "black",
    borderColor: 'text.primary'
  },
}));

export default function WithPaper(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={{background: props.background}}>
        {props.children}
    </Paper>
  );
}
