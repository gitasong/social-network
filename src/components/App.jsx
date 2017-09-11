import React from "react";
import Profile from "./Profile";
import Feed from "./Feed";
import About from "./About";
import Recommended from "./Recommended";

function App(props) {
  return (
    <div>
      <Profile/>
      <About/>
      <Feed />
      <Recommended />
    </div>
  );
}

export default App;
