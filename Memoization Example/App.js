import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { useState } from "react";
function App() {
  console.log("App rendered");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Memoization</h1>
      <button onClick={() => setCount(count + 1)}>Print Render</button>
      <h2>{count}</h2>
      <Header />
    </div>
  );
}

export default App;
