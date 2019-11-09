import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';


// COMPONENT TODO THAT RETURNS THE TODO
// using direct destructuring in the func argument.
function Todo({ todo, index}) {
  return (
    <div>
      <Typography>{todo}</Typography>
    </div>
  )
}

// COMPONENT INPUT THAT ALLOWS US TO ADD TOTOS
function InputTodo({addTodo}) {
  const  [value, setValue] = useState("");

  const submit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  }

  return (
    <Grid container>
      <Grid item xs={6}>
        <form onSubmit={submit}>
          <TextField
            id="standard-full-width"
            onChange={e => setValue(e.target.value)}
            id="standard-full-width"
            label={"Add Your SubItem"}
            style={{ margin: 8 }}
            placeholder={"Add Your SubItem"}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={value}
          />
        </form>
      </Grid>
      <Grid item xs={6}>
        <Fab size="small" onClick={submit} color="secondary" aria-label="add" >
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  )
}

// MAIN COMPONENT!
const Item = (props) => {

  // const [count, setCount] = useState(0);
  // const [icon, setIcon] = useState("keyboard_arrow_down");

  // // tell React that your component needs to do something after render
  // useEffect(()=> {
  //     if(count % 2 === 0) {
  //       setIcon("keyboard_arrow_down")
  //     } else {
  //       setIcon("keyboard_arrow_up")
  //       return
  //     }
  // });

  // we have to save it at the local storage!!! Then load it, if not we will
  // lost our data
  const [todos, setTodos] = useState(props.arraySubItems);


  // useEffect((props) => {
  //   const todos = [{props.inputSubItemValue}]
  //   setTodos(todos);
  // })


  const addTodo = text => {
    const newTodo = [...todos, text];
    setTodos(newTodo);
    // add the new element to the subitem!
    // props.arraySubItems.push(text);
    debugger
    props.addSubItem(text);
    console.log(props.arraySubItems);
  }



  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>{props.label}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Icon style={{cursor: "pointer"}}>code</Icon>
      </Grid>
      <Grid item xs={2}>
        <DeleteOutlinedIcon onClick={props.clicked.bind(this, props.id)} style={{cursor: "pointer"}} id={props.id}/>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
        {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
            />
        ))}
        <InputTodo addTodo={addTodo}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Item;
