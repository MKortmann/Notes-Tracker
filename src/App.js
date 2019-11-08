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
    list: null,
    selectedList: 0,
    itemAdded: false
  }

// add the item to the items array
  addItem = () => {
    const container = [...this.state.container];
    container[this.state.selectedList].items.push(this.state.item);
    this.setState({
      container: container,
      itemAdded: true
    })
  }
// add the item to the items array
  addList = () => {
    const container = [...this.state.container];
    const id = container.length + 1;
    container.push({id: `${this.state.list}-${id}`, items: []});
    this.setState({
      container: container,
      list: `${this.state.list}-${id}`
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
  // Used to REMOVE items
  itemRemove = (id) => {
    let container = [...this.state.container];
    container[this.state.selectedList].items.splice(id, 1);
    this.setState({
      container: container
    })
  }
  // Set the active List to be displayed
  setActiveList = (id) => {
    // we will get here the last value of the string that correspond to the id number
    // used to select the active item in the items.
    const lastIdValue = parseInt(id.slice(-1))-1;
    this.setState({
      selectedList: lastIdValue
    })
  }

  render () {

  const buttonsListToBeRender =  (
      this.state.container.map((i, index) => {
        return (
          <Button label={i.id} clicked={this.setActiveList.bind(this, i.id)} icon={"load"}/>
        )
      })
    )

  let itemsToBeRender = null;
  if (this.state.itemAdded) {
  itemsToBeRender =  (
      this.state.container[this.state.selectedList].items.map((i, index) => {
        let styleBackground = null;
        styleBackground = (index%2 === 0 ) ? 'rgba(0,212,255,0.5)' : "white"
        return (
          <div key={index}  style={{background: styleBackground}}>
          <Item label={i} clicked={this.itemRemove} id={index}/>
          </div>
        )
      })
    )
  }
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
