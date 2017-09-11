import React from "react";
import Profile from "./Profile";
import Feed from "./Feed";
import About from "./About";

function App(props) {
  return (
    <div>
      <Profile/>
      <About/>
      <Feed />
    </div>
  );
}

export default App;
