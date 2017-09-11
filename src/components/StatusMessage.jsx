import React from "react";

function StatusMessage(props) {
  return (
    <div>
      <img src={props.avatar}></img>
      <h3>{props.name}</h3>
      <p>{props.status}</p>
    </div>
  );
}

export default StatusMessage;
