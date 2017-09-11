import React from "react";
import RecommendedEntry from "./RecommendedEntry";

function Recommended(props) {
  var recommendedStyles = {
    border: "1px solid #000000",
    padding: "1.5rem",
    float: "right",
    margin: "2%",
    maxWidth: "20%"
  }
  return (
    <div style={recommendedStyles}>
      <h3>Recommended to Follow</h3>
      <RecommendedEntry
        avatar="https://image.flaticon.com/icons/png/512/78/78373.png"
        title="Some Twitter List"
      />
    </div>
  );
}

export default Recommended;
