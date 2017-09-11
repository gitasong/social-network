import React from "react";

function Header(props) {
  var listStyles = {
    display: "inline-block"
  }
  var linkStyles = {
    display: "inline-block",
    color: "blue",
    margin: ".5rem .5rem 0 .5rem",
    padding: "1rem 1rem 0 1rem",
  }
  var inputStyles = {
    float: "right",
    margin: "0 1rem 1rem 1rem",
    padding: ".5rem",
  }
  return (
    <div>
      <ul style={listStyles}>
        <li style={linkStyles}>Home</li>
        <li style={linkStyles}>Notifications</li>
        <li style={linkStyles}>Messages</li>
      </ul>
      <input style={inputStyles} placeholder="Search"></input>
      <input style={inputStyles} placeholder="Tweet"></input>
      <hr/>
    </div>
  );
}

export default Header;
