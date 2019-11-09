import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from "@material-ui/core/TextField";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';


// COMPONENT TODO THAT RETURNS THE TODO
// using direct destructuring in the func argument.
function Todo({ todo }) {
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

// we have to save it at the local storage!!! Then load it, if not we will
  // lost our data
  const [todos, setTodos] = useState([...props.arraySubItems]);

  const addTodo = text => {
    const newTodo = [...props.arraySubItems, text];
    setTodos(newTodo);
    // add the new element to the subitem!
    // props.arraySubItems.push(text);
    props.addSubItem(text, props.selectedItem);
    console.log(props.arraySubItems);
  }

  useEffect( () => {
    const newTodo = [...props.arraySubItems];
    setTodos(newTodo);
  }, [props.label.name])

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>{props.label.name}</Typography>
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
