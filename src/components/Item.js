import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from "@material-ui/core/TextField";
import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

/* IN THIS CASE TO IMPROVE THE READABILITY I ADDING THREE COMPONENTS IN THIS FILE
WE HAVE THREE COMPONENTS:
1) Todo (stateless component): only return the subitems that are the Todos
2) InputTodo (statefull component): here we have state, by each keyboard pressed key, it add the
value to the inputValue. This value is passed to the COMPONENT ITEMS than passed
to the container in APP.js
3) ITEM (statefull component): Encloses the component Todo and InputTodo
*/

// COMPONENT TODO THAT RETURNS THE TODO=SUBITEM
// using direct destructuring in the func argument.
function Todo(props) {

 let newStyleBackground = (props.styleBackground === "white" ) ? '#E8A9B1' : "white"

  return (
    <div style={{background: newStyleBackground, margin: "8px"}}>
      <Typography>{props.todo}</Typography>
    </div>
  )
}

// COMPONENT INPUT THAT ALLOWS US TO ADD TODOS
function InputTodo({addTodo}) {
  // THE VALUE WILL BE FILLED WITH THE KEYBOARD INPUT
  // SETTED ON THE RETURN VALUE
  const  [inputValue, setInputValue] = useState("");
  console.log(`the inputValue is: ${inputValue}`);
  const submit = e => {
    e.preventDefault();
    if(!inputValue) return;
    addTodo(inputValue);
    setInputValue("");
  }

  return (
    <Grid container>
      <Grid item xs={6}>
        <form onSubmit={submit}>
          <TextField
            id="standard-full-width"
            onChange={e => setInputValue(e.target.value)}
            label={"Add Your SubItem"}
            style={{ margin: 8 }}
            placeholder={"Add Your SubItem"}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={inputValue}
          />
        </form>
      </Grid>
      <Grid item xs={6}>
        <Icon onClick={submit} style={{cursor: "pointer"}} color="secondary" aria-label="add">add_circle</Icon>
      </Grid>
    </Grid>
  )
}

// MAIN COMPONENT!
const Item = (props) => {

  // we load the data always from the container at App.js
  // the data loaded is stored in subItems
  const [subItems, setSubItems] = useState([...props.arraySubItems]);

  const addTodo = text => {
    const newSubItem = [...props.arraySubItems, text];
    setSubItems(newSubItem);
    // add the new SUBITEM to the specific ITEM in the container at APP.js!
    props.addSubItem(text, props.selectedItem);
    console.log(props.arraySubItems);
  }

  // THE USE EFFECT WILL BE TRIGERRED ONLY IF YOU CHANGE THE SELECTED LIST:
  // THIS MEANS ONLY IF YOU SELECTED THE SPECIFIC BUTTON SETTED THROUGH:
  // [props.label.name]
  useEffect( () => {
    console.log(`USE EFFECT TRIGGERED`);
    const newSubItem = [...props.arraySubItems];
    setSubItems(newSubItem);
  }, [props.label.name])

  // ONLY RE-RENDER IF THE NUMBER OF SUBITEMS CHANGED: used to delete subitems and
  // rerender it!!!
  useEffect( () => {
    console.log(`USE EFFECT TRIGGERED`);
    const newSubItem = [...props.arraySubItems];
    setSubItems(newSubItem);
  }, [props.arraySubItems.length])

  // we load the data always from the container at App.js
  // the data loaded is stored in subItems
  const [showSubItems, setShowSubItems] = useState(false);

  let arrowDesign = showSubItems ? "keyboard_arrow_up" : "keyboard_arrow_down";

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>{props.label.name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Icon onClick={e => setShowSubItems(!showSubItems)} style={{cursor: "pointer"}}>{arrowDesign}</Icon>
      </Grid>
      <Grid item xs={2}>
        <DeleteOutlinedIcon onClick={props.clicked.bind(this, props.id)} style={{cursor: "pointer"}} id={props.id}/>
      </Grid>
      {showSubItems ?
        <React.Fragment>
        {subItems.map((todo, index) => (
          <Grid container key={index}>
              <Grid item xs={10}>
                <Todo
                  index={index}
                  todo={todo}
                  styleBackground={props.styleBackground}
                />
              </Grid>
              <Grid item xs={2}>
                <DeleteOutlinedIcon onClick={props.clickedSubItem.bind(this, index)} style={{cursor: "pointer"}}/>
              </Grid>
          </Grid>
        ))}
        <InputTodo addTodo={addTodo}/>
        </React.Fragment>
    : null }
    </Grid>
  )
}

export default Item;
