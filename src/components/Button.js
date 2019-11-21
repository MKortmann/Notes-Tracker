import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { styled } from '@material-ui/core/styles';

// <Button variant="outlined" size="small" color="primary" fullWidth endIcon={< CloudUploadIcon />} >
//   Submit
// </Button>

const MyButton = styled(Button)({
  background: 'rgba(0,212,255,0.5)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 36,
  padding: '0 30px',
  "&:hover": {
    background: "rgba(255, 105, 135, .5)",
  },
  marginTop: "5px",
  marginRight: "5px"
});



function button (props) {
  return (
    <React.Fragment>
      <MyButton onClick={props.clicked} variant="contained" color="default" style={{background: props.color}}  endIcon={<Icon onClick={props.listDeleteIconClicked}>{props.icon}</Icon>} >
        {props.label}
      </MyButton>
    </React.Fragment>
  );
}

export default button;
