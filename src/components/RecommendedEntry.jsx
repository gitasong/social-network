import React from "react";
import PropTypes from "prop-types";

function RecommendedEntry(props) {
  var imageStyles = {
    maxWidth: "40",
    maxHeight: "40",
  }
  return (
    <div>
      <img style={imageStyles} src={props.avatar}></img>
      <h4>{props.title}</h4>
      <button>Follow</button>
    </div>
  );
}

RecommendedEntry.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default RecommendedEntry;
