import React from "react";
import PropTypes from "prop-types";

function StatusMessage(props) {
  return (
    <div>
      <img src={props.avatar}></img>
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
