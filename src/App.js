import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Button from "./components/Button";
import Item from "./components/Item";
import 'typeface-roboto';


class App extends Component {

  state = {
    items: []
  }

  addItem = () => {
    const items = [...this.state.items];
    items.push(<Item key={new Date()}/>);
    this.setState({
      items: items
    })
  }




  render () {
    return (
      <div className="App">
        <Navbar />
        <Input />
        <Button clicked={this.addItem}/>
        {this.state.items}
      </div>
    );
  }
}

export default App;
