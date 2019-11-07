import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
  display: 'flex',
  flexWrap: 'wrap',
  margin: "15px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },

}));

export default function Input(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TextField
        onChange={props.onChange}
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
    </div>
  );
}