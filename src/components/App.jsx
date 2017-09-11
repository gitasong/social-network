import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import About from "./About";
import Feed from "./Feed";
import Recommended from "./Recommended";

function App(props) {
  return (
    <div>
      <Header/>
      <Profile/>
      <About/>
      <Feed />
      <Recommended />
    </div>
  );
}

export default App;
