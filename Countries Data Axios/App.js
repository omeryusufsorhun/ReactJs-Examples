import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,capital,currencies")
      .then((response) => setCountry(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Countries</h1>
      {country.map((countries) => {
        return <div key={countries.name}>{countries.name}</div>;
      })}
    </div>
  );
}

export default App;
