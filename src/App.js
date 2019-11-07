import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Button from "./components/Button";
import Item from "./components/Item";
import 'typeface-roboto';


class App extends Component {
// we store basically the arrays of items and the actual typed item.
  state = {
    items: [],
    container:
      [
      // {
      // id: "item1", items: []
      // }
      ],
    item: null,
    list: null
  }
// add the item to the items array
  addItem = () => {
    const items = [...this.state.items];
    items.push(this.state.item);
    this.setState({
      items: items
    })
  }
// add the item to the items array
  addList = () => {
    // {
    // id: "item1", items: []
    // }
    const container = [...this.state.container];
    const id = container.length + 1;
    container.push({id: `${this.state.list}-${id}`, items: []});
    this.setState({
      container: container
    })
  }
// To save item name at each keyboard input
  saveItem = (e) => {
    this.setState({item: e.target.value});
  }
// To save list name at each keyboard input
  saveList = (e) => {
    this.setState({list: e.target.value});
  }
  // Used to remove items
  itemClicked = (id) => {
    let items = [...this.state.items];
    items.splice(id, 1);
    this.setState({
      items: items
    })
  }

  render () {

  const itemsToBeRender =  (
      this.state.items.map((i, index) => {
        let styleBackground = null;
        styleBackground = (index%2 === 0 ) ? 'rgba(0,212,255,0.5)' : "white"
        return (
          <div key={index}  style={{background: styleBackground}}>
          <Item label={i} clicked={this.itemClicked} id={index}/>
          </div>
        )
      })
    )

  const buttonsListToBeRender =  (
      this.state.container.map((i, index) => {
        return (
          <Button label={i.id} clicked={this.addItem} icon={"load"}/>
        )
      })
    )

  let formToAddItemsToBeRender = null;
  if (this.state.container.length !== 0) {
    formToAddItemsToBeRender = (
        <React.Fragment>
          {buttonsListToBeRender}
          <Grid container alignItems="center">
          <Grid item xs={6}>
            <Input label={"Please, add your item"} onChange={this.saveItem}/>
          </Grid>
          <Grid item xs={6}>
            <Button label={"Submit"} clicked={this.addItem} icon={"send"}/>
          </Grid>
          </Grid>
        </React.Fragment>
    )
  }


    return (
      <div className="App">
        <Grid className="App" container direction="row" justify="center" alignItems="center">
          <Navbar />
          <Grid item xs={6}>
            <Input label={"Please, add your list name"} onChange={this.saveList}/>
          </Grid>
          <Grid item xs={6}>
            <Button label={"Add List"} clicked={this.addList} icon={"add"}/>
          </Grid>
          <Grid item xs={12}>
          {formToAddItemsToBeRender}
          </Grid>
          <Grid item xs={12}>
          {itemsToBeRender}
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default App;
