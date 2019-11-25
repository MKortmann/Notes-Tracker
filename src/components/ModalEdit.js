import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Input from "./Input";
import Button from "./Button";

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
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState(props.initialValue);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editTextAndCloseModal = () => {
    props.clickedToEditSubItem(inputText);
    setOpen(false);
  }

  return (
    <div>
      <EditIcon fontSize="large" onClick={handleOpen}  style={{cursor: "pointer"}}/>
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
            <h2 id="transition-modal-title">Please, insert a new value for this subitem!</h2>
            <Input
              label={"Add A New SubItem Value"}
              placeholder={"Add A New SubItem Value"}
              onChange={e => setInputText(e.target.value)}
              value={inputText}
              >
              </Input>
            <Button label="Edit" color={"red"} clicked={editTextAndCloseModal}></Button>
            <Button label="Back" clicked={handleClose}></Button>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
