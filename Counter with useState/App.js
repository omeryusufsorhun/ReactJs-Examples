import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useState } from "react";
function App() {
  const [deger, setDeger] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          setDeger(deger + 1);
        }}
      >
        Arttır
      </button>
      <h3>{deger}</h3>
      <button
        onClick={() => {
          setDeger(deger - 1);
        }}
      >
        Azalt
      </button>
      <button onClick={() => setDeger(0)}>Sıfırla</button>
    </div>
  );
}

export default App;
