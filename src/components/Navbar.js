import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import Modal, { auth } from "./Modal";
import Firebase from "../config/fbConfig";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'rgba(0,212,255,0.5)',
    color: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [userIsOnline, setUserIsOnline] = useState(false);

  const showAllMenus = (
    <React.Fragment>
      <Modal showInputs={false} label={"Account"} title={"Account"} description={"Manage Your Account"} buttonLabel={"close"}></Modal>
      <Modal showInputs={false} label={"LogOut"} title={"LogOut"} description={""} buttonLabel={"close"} buttonLabel2={"LogOut"}></Modal>
      <Modal LogIn={true} showInputs={true} label={"LogIn"} title={"LogIn"} description={""} buttonLabel={"close"} buttonLabel2={"LogIn"}></Modal>
      <Modal signUp={true} showInputs={true} label={"SignUp"} title={"SignUp"} description={""} buttonLabel={"close"} buttonLabel2={"SignUp"}></Modal>
    </React.Fragment>
  );
  const showNotAllMenus = (
      <React.Fragment>
        <Modal LogIn={true} showInputs={true} label={"LogIn"} title={"LogIn"} description={""} buttonLabel={"close"} buttonLabel2={"LogIn"}></Modal>
        <Modal signUp={true} showInputs={true} label={"SignUp"} title={"SignUp"} description={""} buttonLabel={"close"} buttonLabel2={"SignUp"}></Modal>
      </React.Fragment>
    );

  // Listen for auth status changes
  auth.onAuthStateChanged(user => {
    if(user) {
      console.log("The user is online")
      setUserIsOnline(true);
    } else {
      console.log("The user is offline")
      setUserIsOnline(false);
    }
  });

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Notes Tracker
          </Typography>
          {userIsOnline ? showAllMenus : showNotAllMenus}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
