import React from "react";

function Header(props) {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Notifications</li>
        <li>Messages</li>
      </ul>
      <input placeholder="Search"></input>
      <input placeholder="Tweet"></input>
    </div>
  );
}

export default Header;
