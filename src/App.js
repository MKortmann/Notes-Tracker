import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Button from "./components/Button";
import Item from "./components/Item";
import 'typeface-roboto';


class App extends Component {

  state = {
    items: [],
    item: null
  }

  addItem = () => {
    const items = [...this.state.items];
    items.push(this.state.item);
    this.setState({
      items: items
    })
  }

  saveItem = (e) => {
    this.setState({item: e.target.value});
  }

  itemClicked = (e) => {

    console.log(`You clicked at: ${e._dispatchInstances.key}`);
    const items = [...this.state.items];
    items.splice(e._dispatchInstances.key, 1);

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
          <div style={{background: styleBackground}}>
          <Item key={index} label={i} clicked={this.itemClicked}/>
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
