import React, { useContext } from "react";
import { ThemeContext } from "./App";
export default function Context() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div style={theme}>
      <h1>content başlık</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
        laudantium pariatur eaque quam repellendus eius soluta, odio at amet.
        Quia.
      </p>
    </div>
  );
}
