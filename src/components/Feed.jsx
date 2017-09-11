import React from "react";
import StatusMessage from "./StatusMessage";

function Feed(props) {
  var feedStyles = {
    border: "1px solid #000000",
    padding: "1.5rem",
    float: "left",
    margin: "2%",
    maxWidth: "65%",
    minWidth: "35%"
  }
  return (
    <div style={feedStyles}>
      <StatusMessage
        avatar="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png"
        name="Jimmy"
        status="Hello. Goodbye."/>
    </div>
  );
}

export default Feed;
