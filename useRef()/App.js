import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";

const App = () => {
  const inputRef = useRef();
  const focusHandle = () => {
    console.log(inputRef.current);
  };
  return (
    <div>
      <h1>useRef()</h1>
      <input type="text" ref={inputRef} />
      <button onClick={focusHandle}>Focus</button>
    </div>
  );
};

export default App;
