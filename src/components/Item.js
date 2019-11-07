import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const item = (props) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>{props.label}</Typography>
      </Grid>
      <Grid item xs={6}>
        <DeleteOutlinedIcon onClick={props.clicked.bind(this, props.id)} style={{cursor: "pointer"}} id={props.id}/>
      </Grid>
    </Grid>
  )
}

export default item;
