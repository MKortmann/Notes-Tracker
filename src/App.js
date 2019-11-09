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
    container:
      [
        // {
        // id: "item1", items: [
                              // {
                                    // id: "subitem1", items: []
                              // }
                            // ]
        // }
      ],
    selectedList: 0,
    selectedItem: 0,
    inputListValue: "",
    inputItemValue: "",
    inputSubItemValue: "itemsubvalue"
  }

// add the item to the items array
  addItem = () => {
    const container = [...this.state.container];
    container[this.state.selectedList].items.push({name: this.state.inputItemValue, subitems: []});
    this.setState({
      container: container,
      inputItemValue: ""
    })
  }
// add the item to the items array
  addList = (e) => {
    const container = [...this.state.container];
    const id = container.length + 1;
    container.push( {id: `${this.state.inputListValue}-${id}`, items: [  ] } );
    this.setState({
      container: container,
      inputListValue: ""
    })

  }
  // add the subitem to the items array
    addSubItem = (subitem, selectedItem) => {
      const container = [...this.state.container];
      container[this.state.selectedList].items[selectedItem].subitems.push(subitem);
      this.setState({
        container: container,
        inputItemValue: ""
      })
    }
// To save item name at each keyboard input
  saveItem = (e) => {
    this.setState({inputItemValue: e.target.value});
  }
// // To save item name at each keyboard input
//   saveSubItem = (e) => {
//     debugger
//     this.setState({inputSubItemValue: e.target.value});
//   }
// To save list name at each keyboard input
  saveList = (e) => {
    this.setState({inputListValue: e.target.value});
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

  // delete this list!!
  listItemClicked = (id) => {
    const container = [...this.state.container];
    // here we check for the exactly name that is the key(id)
    container.forEach( (i, index) => {
      if(i.id === id) {
        container.splice(index, 1);
      }
    })
    // reordering the list and renamed interval:
    container.forEach( (id, index) => {
      const newString = id.id.substring(0, id.id.length -1);
      const number = index + 1;
      id.id = newString + number;
    })
    this.setState({
      container: container,
    })
  }

  render () {

  const buttonsListToBeRender =  (
      this.state.container.map((i, index) => {

        if(this.state.selectedList === index) {
          return (
            <Button
              key={i.id}
              label={i.id}
              clicked={this.setActiveList.bind(this, i.id)}
              icon={"delete"}
              listItemClicked={this.listItemClicked.bind(this, i.id)}
              color={"red"}
              />
          )
        } else {
          return (
            <Button
              key={i.id}
              label={i.id}
              clicked={this.setActiveList.bind(this, i.id)}
              icon={"delete"}
              listItemClicked={this.listItemClicked.bind(this, i.id)}
              />
          )
        }

      })
    )

  let itemsToBeRender = null;
  // render only if the list has items
  if (this.state.container[this.state.selectedList]) {
  itemsToBeRender =  (
      this.state.container[this.state.selectedList].items.map((i, index) => {
        let styleBackground = null;
        styleBackground = (index%2 === 0 ) ? 'rgba(0,212,255,0.5)' : "white"
        // styleBackground = (index%2 === 0 ) ? 'rgba(0,212,255,0.5)' : "white"
        return (
          <div key={index}  style={{background: styleBackground}}>
          <Item label={i} selectedItem={index}
            arraySubItems={this.state.container[this.state.selectedList].items[this.state.selectedItem].subitems}
            addSubItem={this.addSubItem} clicked={this.itemRemove} id={index}/>
          </div>
        )
      })
    )
  }
  // let selectedList = null;
  // if(this.state.container.length > 0) {
  //   selectedList = (
  //     <h2>The Selected List is: {this.state.container[this.state.selectedList].id}</h2>
  //   )
  // }

  let formToAddItemsToBeRender = null;
  if (this.state.container.length !== 0) {
    formToAddItemsToBeRender = (
        <React.Fragment>
          {buttonsListToBeRender}
          <Grid container alignItems="center">
          <Grid item xs={6}>
            <Input label={"Please, add your item"} onChange={this.saveItem} value={this.state.inputItemValue}/>
          </Grid>
          <Grid item xs={6}>
            <Button label={"Submit"} color={"#1B2616"} clicked={this.addItem} icon={"send"}/>
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
            <Input label={"Please, add your list name"} onChange={this.saveList} value={this.state.inputListValue}/>
          </Grid>
          <Grid item xs={6}>
            <Button label={"Add List"} color={"#1B2616"} clicked={this.addList} icon={"add"} />
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
