import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Button from "./components/Button";
import Item from "./components/Item";
import { db, auth } from "./components/Modal";
import Paper from "./components/Paper";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import 'typeface-roboto';

class App extends Component {

// container: we have here a container that store all the list + items and the respective subitems
// selectedList and SelectedItem: help to track which list and item we have seletected!
// inputListValue and inputItemValue get the input of the keyboard to store the value in the container
  state = {
    container:
      [ // TREE CONTAINER STORE
        // {
        // id: "List1", items: [
                              // {
                                    // id: "subitem1", subitems: []
                              // }
                            // ]
        // }
      ],
    selectedList: 0,
    inputListValue: "",
    inputItemValue: "",
    outputPaperMsg: null
  }

  componentDidMount() {

    // get data from firebase
    auth.onAuthStateChanged( user => {
      let checkData = [];
      // db.collection("containers").get().then( snapshot => {
      // work as the same commented line above, but it sets also a lister do the
      // database! It is like a picture how the collection look at this time.
      // db.collection("containers").onSnapshot( snapshot => {
      // db.collection("containers").get().then( snapshot => {
      db.collection("containers").get().then( snapshot => {
        // console.log(snapshot.docs.data());
        snapshot.forEach((doc, index) => {
          checkData.push(doc.data());
        })

      if(user) {
        const getFullContainer = [];
        checkData.forEach(item => {
          getFullContainer.push(item.container)
        })

        this.setState({
          container: getFullContainer,
          outputPaperMsg: null
        })
      }
    }).catch(err => {
      console.log("Please check your internet connection and try to logIn again." + `${err.message}`)
    })

    db.collection("users").doc(user.uid).get().then(doc => {

      console.log(doc.data().container)
    })
      if(!user) {
        this.setState({
          container: [],
          outputPaperMsg: <Paper />
        })
      }
    })
}

// ADD:  add a new ITEM to the items array in the respectived selectedList
  addItem = (e) => {
    e.preventDefault();
    const container = [...this.state.container];
    container[this.state.selectedList].items.push({name: this.state.inputItemValue, subitems: []});
    this.setState({
      container: container,
      inputItemValue: ""
    })
    debugger
    db.collection("containers").doc("FFBd27lHExs0LhEaJSSh").set({
      container: container
    })
    .then(() => {
      alert("item added!");
    })
  }
// ADD: a new LIST to the container!
  addList = (e) => {
    e.preventDefault();
    const container = [...this.state.container];
    const id = container.length + 1;
    container.push( {id: `${this.state.inputListValue}-${id}`, items: [  ] } );
    this.setState({
      container: container,
      inputListValue: ""
    })
    // sending data to firebase
    const containerToDB = {container: {id: `${this.state.inputListValue}-${id}`, items: [  ] } };
    // saving also to Firebase Database
    db.collection("containers").add(containerToDB)
      .then(() => {
        alert("worked!");
      })


  }
  // ADD the SUBITEM to the items array
  addSubItem = (subitem, selectedItem) => {
    const container = [...this.state.container];
    container[this.state.selectedList].items[selectedItem].subitems.push(subitem);
    this.setState({
      container: container,
      inputItemValue: ""
    })
  }
// To save item name at each keyboard input at the state
  saveItem = (e) => {
    this.setState({inputItemValue: e.target.value});
  }
// To save list name at each keyboard input at the state
  saveList = (e) => {
    this.setState({inputListValue: e.target.value});
  }
  // REMOVE ITEMS
  itemRemove = (id) => {
    debugger
    let container = [...this.state.container];
    container[this.state.selectedList].items.splice(id, 1);
    this.setState({
      container: container
    })
  }
  // REMOVE SUBITEMS
  subItemRemove = (itemId, subItemId) => {
    let container = [...this.state.container];
    container[this.state.selectedList].items[itemId].subitems.splice(subItemId, 1);
    this.setState({
      container: container
    })
  }
  // SET THE ACTIVE LIST TO BE DISPLAYED
  setActiveList = (id) => {
    // we will get here the last value of the string that correspond to the id number
    // used to select the active item in the items.
    const lastIdValue = parseInt(id.slice(-1))-1;
    this.setState({
      selectedList: lastIdValue
    })
  }

  // DELETE the LIST
  listItemClicked = (id) => {
    const container = [...this.state.container];
    // here we check for the exactly name that is the key(id)
    container.forEach( (i, index) => {
      if(i.id === id) {
        container.splice(index, 1);
      }
    })
    // AFTER DELETING A LIST WE HAVE TO REORDERING IT
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

  // RENDER THE LIST OF BUTTONS
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

  // FORM THAT WILL ALLOW US TO ADD ITEMS
  let formToAddItemsToBeRender = null;
  if (this.state.container.length !== 0) {
    formToAddItemsToBeRender = (
        <React.Fragment>
          {buttonsListToBeRender}
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <form onSubmit={this.addItem}>
                <Input label={"Please, add your item"} onChange={this.saveItem} value={this.state.inputItemValue}/>
              </form>
            </Grid>
            <Grid item xs={6}>
              <Button label={"Submit"} color={"#00474F"} clicked={this.addItem} icon={"send"}/>
            </Grid>
          </Grid>
        </React.Fragment>
    )
  }
  // RENDER THE LIST OF ITEMS
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
              arraySubItems={this.state.container[this.state.selectedList].items[index].subitems}
              addSubItem={this.addSubItem} clickedSubItem={this.subItemRemove.bind(this, index)}
              styleBackground={styleBackground}
              clicked={this.itemRemove.bind(this, index)}
              id={index}/>
          </div>
        )
      })
    )
  }

    return (
      <div className="App">
        <Grid className="App" container direction="row" justify="center" alignItems="center">
          <Navbar />
          {this.state.outputPaperMsg}
          <Grid item xs={6}>
            <form onSubmit={this.addList}>
              <Input label={"Please, add your list name"} onChange={this.saveList} value={this.state.inputListValue}/>
            </form>
          </Grid>
          <Grid item xs={6}>
            <Button label={"Add List"} color={"#00474F"} clicked={this.addList} icon={"add"} />
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
