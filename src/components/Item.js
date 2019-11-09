import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Icon from '@material-ui/core/Icon';

const Item = (props) => {

  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState("keyboard_arrow_down");


  // tell React that your component needs to do something after render
  useEffect(()=> {
      if(count % 2 === 0) {
        setIcon("keyboard_arrow_down")
      } else {
        setIcon("keyboard_arrow_up")
        return
      }
  });

  const [todos, setTodos] = useState([
    {text: "subItem 1"},
    {text: "subItem 2"}
  ]);


  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>{props.label}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Icon style={{cursor: "pointer"}} onClick={()=> setCount(count + 1)}>{icon}</Icon>
      </Grid>
      <Grid item xs={2}>
        <DeleteOutlinedIcon onClick={props.clicked.bind(this, props.id)} style={{cursor: "pointer"}} id={props.id}/>
      </Grid>
    </Grid>
  )
}

export default Item;
