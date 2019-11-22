import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Modal, { auth } from "./Modal";

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

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const [userIsOnline, setUserIsOnline] = useState(false);

  const showAllMenus = (
    <React.Fragment>
      <Modal showAccount={true} label={"Account"} title={"Account Details"} description={""} buttonLabel={"close"}></Modal>
      <Modal showInputs={false} label={"LogOut"} title={"LogOut"} description={""} buttonLabel={"close"} buttonLabel2={"LogOut"}></Modal>
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
          <Typography variant="h4" className={classes.title}>
            Notes Tracker
          </Typography>
          {userIsOnline ? showAllMenus : showNotAllMenus}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
