import React from "react";
import PropTypes from "prop-types";

function RecommendedEntry(props) {
  return (
    <div>
      <img src={props.avatar}></img>
      <h3>{props.title}</h3>
      <button>Follow</button>
    </div>
  );
}

RecommendedEntry.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default RecommendedEntry;
