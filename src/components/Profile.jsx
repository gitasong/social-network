import React from "react";

function Profile(props) {
  var profileStyles = {
    border: "1px solid #000000",
    padding: "1.5rem",
    float: "left",
    margin: "2rem"
  }
  var imageStyles = {
    maxWidth: "40",
    maxHeight: "40",
  }
  var aboutStyles = {
    maxWidth: "17rem",
  }
  return (
    <div style={profileStyles}>
      <img style={imageStyles} src="http://www.iconarchive.com/download/i47415/hopstarter/face-avatars/Female-Face-FC-5.ico"></img>
      <h1>Flora Willcocks</h1>
      <p>@flora</p>
      <p style={aboutStyles}>Sugar plum sweet roll candy canes wafer. Lemon drops chocolate bar ice cream muffin. Biscuit bonbon tiramisu pastry macaroon cupcake cheesecake. Fruitcake sweet roll chocolate soufflé icing topping dragée icing. Marshmallow jelly-o bear claw sesame snaps cupcake muffin. Jelly-o candy canes gummies chocolate bar danish dessert brownie. </p>
    </div>
  );
}

export default Profile;
