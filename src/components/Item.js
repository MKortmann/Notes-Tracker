import React from "react";


const item = (props) => {
  return (
    <h4 onClick={props.clicked}>{props.label}</h4>
  )
}

export default item;
