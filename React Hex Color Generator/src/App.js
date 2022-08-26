import { createContext, useState } from "react";
import "./index.css";

export default function App() {
  const [hex, setHex] = useState("ffffff");
  const randomHex = () => {
    const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(random);
  };
  const setBackground = () => {};
  return (
    <div className="App" style={{ backgroundColor: `${hex}` }}>
      <button onClick={randomHex}>Change</button>
      <h1>{hex} </h1>
    </div>
  );
}
