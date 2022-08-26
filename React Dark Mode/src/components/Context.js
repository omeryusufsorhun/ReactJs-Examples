import React, { useContext } from "react";
import { Theme } from "../App";
function Context() {
  return (
    <div style={useContext(Theme)}>
      <h2></h2>
      <h1>Context</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default Context;
