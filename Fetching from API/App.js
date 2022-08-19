import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,capital,currencies")
      .then((response) => response.json())
      .then((response) => setCountry(response));
  }, []);
  console.log("countries", country);
  return (
    <div className="App">
      <h1>countries</h1>
      {country.map((country) => {
        return (
          <div key={country.name}>
            <h2>{country.name} </h2>
            <h2> {country.capital}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
