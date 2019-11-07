import React, { Component } from 'react';
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
    item: null
  }
// add the item to the items array
  addItem = () => {
    const items = [...this.state.items];
    items.push(this.state.item);
    this.setState({
      items: items
    })
  }
// Used to save item at each keyboard input
  saveItem = (e) => {
    this.setState({item: e.target.value});
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

    return (
      <div className="App">
        <Navbar />
        <Input onChange={this.saveItem}/>
        <Button clicked={this.addItem}/>
        {itemsToBeRender}
      </div>
    );
  }
}

export default App;
