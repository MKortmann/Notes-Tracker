import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  container: {
  display: 'flex',
  flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TextField
        id="standard-full-width"
        label="Please, add your note"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="outlined" color="secondary" fullWidth className={classes.button}>
        Submit
      </Button>

    </div>
  );
}
