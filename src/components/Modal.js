import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from "./Button";
import TextField from "@material-ui/core/TextField";
import Firebase from "../config/fbConfig";

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid rgba(0,212,255,0.5)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// make auth and firestore references
export const auth = Firebase.auth();
export const db = Firebase.firestore();

export default function TransitionsModal(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // THE VALUE WILL BE FILLED WITH THE KEYBOARD INPUT
  // SETTED ON THE RETURN VALUE
  const  [inputUserEmailValue, setinputUserEmailValue] = useState("");
  const  [inputPasswordValue, setInputPasswordValue] = useState("");


  const [closeModal, setcloseModal] = useState(false);

  const submit = e => {
    e.preventDefault();
    if(!inputUserEmailValue || !inputPasswordValue) {alert("Please, add E-Mail and Password!")}
    else {
      console.log(inputUserEmailValue);
      console.log(inputPasswordValue);

      if(props.signUp) {
        auth.createUserWithEmailAndPassword(inputUserEmailValue, inputPasswordValue)
          .then(res => {
            console.log(res);
            console.log(res.user);
            setOpen(false);
            setinputUserEmailValue("");
            setInputPasswordValue("");
          });

      } else if (props.LogIn) {
        auth.signInWithEmailAndPassword(inputUserEmailValue, inputPasswordValue)
          .then(res => {
            console.log(res);
            console.log(res.user);
            setOpen(false);
            setinputUserEmailValue("");
            setInputPasswordValue("");
          });
      }
    }
  }

  const handleLogOut = e => {
    // LogOut
    auth.signOut()
      .then(() => {
        console.log("user signed out");
        setOpen(false);
      });
  }

  // // Listen for auth status changes
  // auth.onAuthStateChanged(user => {
  //   if(user) {
  //     console.log("The user is online")
  //   } else {
  //     console.log("The user is offline")
  //   }
  // });

  let showInputs = <Button clicked={handleClose} label={props.buttonLabel}></Button>;
  if (props.showInputs) {
    showInputs = (
      <div>
        <TextField
          onChange={e => setinputUserEmailValue(e.target.value)}
          id="standard-full-width"
          label={"Email address"}
          placeholder={"Add Your Email Address"}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={inputUserEmailValue}
        />
        <TextField
          onChange={e => setInputPasswordValue(e.target.value)}
          id="standard-full-width"
          label={"Your Password"}
          placeholder={"Add Your Password"}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={inputPasswordValue}
          type="password"
        />
        <Button clicked={handleClose} label={props.buttonLabel}></Button>
        <Button onSubmit={submit} color={"red"} clicked={submit} label={props.buttonLabel2}></Button>
        </div>
    )
  }

  if (props.label === "LogOut") {
    showInputs = (
      <div>
          <Button clicked={handleClose}  label={props.buttonLabel}></Button>
          <Button clicked={handleLogOut} color={"red"} label={props.buttonLabel2}></Button>
      </div>
    )
  }

  return (
    <div>
      <Typography type="button" style={{margin: "20px", fontSize: "20px", cursor: "pointer"}} onClick={handleOpen}>
        {props.label}
      </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <h2 id="transition-modal-title">{props.title}</h2>
              <p id="transition-modal-description">{props.description}</p>
              {showInputs}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
