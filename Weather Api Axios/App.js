import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import City from "./City";
import { useState, useEffect } from "react";

function App() {
  const key = "54ebd00b2b79c875a22d9ee208eefb05";
  const [city, setCity] = useState("turkey");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );

        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getWeather();
  }, [search]);

  return (
    <div className="App">
      <h1>{search} </h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <City city={city} />
    </div>
  );
}

export default App;
