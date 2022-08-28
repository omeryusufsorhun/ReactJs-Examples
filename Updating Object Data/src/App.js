import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="surname"
        name="surname"
        onChange={handleChange}
      />
      <input type="text" placeholder="age" name="age" onChange={handleChange} />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
