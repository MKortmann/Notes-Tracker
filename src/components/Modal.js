import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let showInputs = null;
  if (props.showInputs) {
    showInputs = (
      <div>
        <TextField
          id="standard-full-width"
          label={"Email address"}
          placeholder={"Add Your Email Address"}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label={"Your Password"}
          placeholder={"Add Your Password"}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    )
  }

  return (
    <div>
      <Typography type="button" style={{margin: "20px", fontSize: "20px", cursor: "pointer"}}onClick={handleOpen}>
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
              <Button onClick={handleClose}>{props.buttonLabel}</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
