import "./App.css";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  const [baslik, setBaslik] = useState("React Baslik");
  const number = 1;

  return (
    <div className="App">
      <Container baslik={baslik} number={number} />,
      <button
        onClick={() => {
          setBaslik("başlık değiştirildi");
        }}
      ></button>
    </div>
  );
}

export default App;
