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
// import the wrapper component to make "the paper like style"
import WithPaper from "./hoc/WithPaper";

class App extends Component {

// container: we have here a container that store all the list + items and the respective subitems
// selectedList and SelectedItem: help to track which list and item we have seletected!
// inputListValue and inputItemValue get the input of the keyboard to store the value in the container
  state = {
    container:
      [ // TREE CONTAINER STORE: THE FIXED KEYS HAVE UPPER-CASE (trying to make it understandable)
        // {
        // LIST: "List1", ITEMS: [
                              // {
                                    // ITEM: "item", SUBITEMS: []
                              // }
                            // ]
        // }
      ],
    selectedList: 0,
    inputListValue: "",
    inputItemValue: "",
    outputPaperMsg: null,
    token: null
  }

  componentDidMount() {
    // Each user has a token created in the moment of the SignUP!
    // this token is used to identify the user in firebase! So we can save and
    // retrieve data for this specific user.
    let token = null;
    // get data from firebase
    auth.onAuthStateChanged( user => {
      // retrieving specific data from this user: the user should be auth and has a token
      if(localStorage.getItem("token") !== null && user) {

        token = localStorage.getItem("token");
        this.setState({
          token: token
        })

        // GET DATA FROM A SPECIFIC COLLECTION
        let collection = db.collection("containers").doc(token);

        collection.get().then( doc => {
          console.log("Document data:", doc.data());

          this.setState({
            container: doc.data().container,
            outputPaperMsg: null
          })
    })
    .catch(err => {
      console.log(`The user has no data ${err.message}`);
      // used to clear state: when user logOut
      this.setState({
        container: [],
        outputPaperMsg: null
      })
    })

  } else {
    // used to clear state: when user logOut
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
    container[this.state.selectedList].ITEMS.push({ITEM: this.state.inputItemValue, SUBITEMS: []});
    this.setState({
      container: container,
      inputItemValue: ""
    })

    // only contact firebase if the user is logged
    auth.onAuthStateChanged( user => {
      if (user) {
        db.collection("containers").doc(this.state.token).set({
          container: container
        })
        .then(() => {
          console.log("ITEM ADDED!");
        })
      }
    });

  }
// ADD: a new LIST to the container!
  addList = (e) => {
    e.preventDefault();
    const container = [...this.state.container];
    const id = container.length + 1;
    container.push( {LIST: `${this.state.inputListValue}-${id}`, ITEMS: [  ] } );
    this.setState({
      container: container,
      inputListValue: ""
    })

    // only contact firebase if the user is logged
    auth.onAuthStateChanged( user => {
      if (user) {
        // sending data to firebase: the user should has a token
        if (this.state.token !== null) {
          // saving also to Firebase Database
          db.collection("containers").doc(this.state.token).set({
            container: container
          })
            .then(() => {
              console.log("LIST ADDED!");
            })
        }
      }
    });

  }
  // ADD the SUBITEM to the items array
  addSubItem = (subitem, selectedItem) => {
    const container = [...this.state.container];
    container[this.state.selectedList].ITEMS[selectedItem].SUBITEMS.push(subitem);
    this.setState({
      container: container,
      inputItemValue: ""
    })

    // only contact firebase if the user is logged
    auth.onAuthStateChanged( user => {
      if (user) {
        // sending data to firebase: the user should has a token
        if (this.state.token !== null) {
          // saving also to Firebase Database
          db.collection("containers").doc(this.state.token).set({
            container: container
          })
          .then(() => {
            console.log("SUBITEM ADDED!");
          })
        }
      }
    });


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
    let container = [...this.state.container];
    container[this.state.selectedList].ITEMS.splice(id, 1);
    this.setState({
      container: container
    })

    // only contact firebase if the user is logged
    auth.onAuthStateChanged( user => {
      if (user) {
        // sending data to firebase: the user should has a token
        if (this.state.token !== null) {
          // saving also to Firebase Database
          db.collection("containers").doc(this.state.token).set({
            container: container
          })
          .then(() => {
            console.log("ITEM removed!");
          })
        }
      }
    });


  }
  // REMOVE SUBITEMS
  subItemRemove = (itemId, subItemId) => {
    let container = [...this.state.container];
    container[this.state.selectedList].ITEMS[itemId].SUBITEMS.splice(subItemId, 1);
    this.setState({
      container: container
    })


    // only contact firebase if the user is logged
    auth.onAuthStateChanged( user => {
      if (user) {
        // sending data to firebase: the user should has a token
        if (this.state.token !== null) {
          // saving also to Firebase Database
          db.collection("containers").doc(this.state.token).set({
            container: container
          })
          .then(() => {
            console.log("subitem removed!");
          })
        }
      }
    });



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
  removeList = (id) => {
    const container = [...this.state.container];
    // here we check for the exactly name that is the key(id)
    container.forEach( (i, index) => {
      if(i.LIST === id) {
        container.splice(index, 1);
      }
    })
    // AFTER DELETING A LIST WE HAVE TO REORDERING IT
    container.forEach( (id, index) => {
      const newString = id.LIST.substring(0, id.LIST.length -1);
      const number = index + 1;
      id.LIST = newString + number;
    })
    this.setState({
      container: container,
    })

    // only contact firebase if the user is logged
    auth.onAuthStateChanged( user => {
      if (user) {
        // sending data to firebase: the user should has a token
        if (this.state.token !== null) {
          // saving also to Firebase Database
          db.collection("containers").doc(this.state.token).set({
            container: container
          })
          .then(() => {
            console.log("list removed!");
          })
        }
      }
    });


  }

  render () {

  // RENDER THE LIST OF BUTTONS
  const buttonsListToBeRender =  (
      this.state.container.map((i, index) => {
        if(this.state.selectedList === index) {
          return (
            <Button
              key={i.LIST}
              label={i.LIST}
              clicked={this.setActiveList.bind(this, i.LIST)}
              icon={"delete"}
              listDeleteIconClicked={this.removeList.bind(this, i.LIST)}
              color={"red"}

              />
          )
        } else {
          return (
            <Button
              key={i.LIST}
              label={i.LIST}
              clicked={this.setActiveList.bind(this, i.LIST)}
              icon={"delete"}
              listDeleteIconClicked={this.removeList.bind(this, i.LIST)}
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
      this.state.container[this.state.selectedList].ITEMS.map((i, index) => {
        let styleBackground = null;
        // styleBackground = (index%2 === 0 ) ? 'rgba(0,212,255,0.5)' : "#C0F2FC"
        styleBackground = (index%2 === 0 ) ? '#F6F9FA' : "#C0F2FC"
        // styleBackground = (index%2 === 0 ) ? 'rgba(0,212,255,0.5)' : "white"
        return (
          <WithPaper key={index}  background={styleBackground}>
            <Item label={i.ITEM} selectedItem={index}
              arraySubItems={this.state.container[this.state.selectedList].ITEMS[index].SUBITEMS}
              addSubItem={this.addSubItem} clickedSubItem={this.subItemRemove.bind(this, index)}
              styleBackground={styleBackground}
              clicked={this.itemRemove.bind(this, index)}
              id={index}/>
          </WithPaper>
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
