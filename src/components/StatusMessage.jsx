import React from "react";
import PropTypes from "prop-types";

function StatusMessage(props) {
  var imageStyles = {
    maxWidth: "40",
    maxHeight: "40",
  }
  return (
    <div>
      <img style={imageStyles} src={props.avatar}></img>
      <h3>{props.name}</h3>
      <p>{props.status}</p>
    </div>
  );
}

StatusMessage.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default StatusMessage;
