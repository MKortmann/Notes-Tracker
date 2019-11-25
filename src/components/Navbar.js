import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Modal, { auth } from "./Modal";
import Mk from "../icons/mk.svg";
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#1B998B',
    color: "white"
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
     marginLeft: "200px",
   },
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
          <img src={Mk} alt="MK-Logo" />
            <Hidden mdDown>
              <Typography variant="h4" only={"md", "xl"} className={classes.title}>
                  Notes Tracker App
              </Typography>
            </Hidden>
            <Hidden lgUp>
            <Typography variant="h6" only={"mdDown"}  className={classes.title}>
              Notes Tracker
            </Typography>
            </Hidden>
          {userIsOnline ? showAllMenus : showNotAllMenus}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
