import React from "react";
import RecommendedEntry from "./RecommendedEntry";

function Recommended(props) {
  return (
    <div>
      <h2>Recommended to Follow</h2>
      <RecommendedEntry
        avatar="https://image.flaticon.com/icons/png/512/78/78373.png"
        title="Some Twitter List"
      />
    </div>
  );
}

export default Recommended;
