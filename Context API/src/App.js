import React, { useState } from "react";
import "./App.css";
import Context from "./Context";

const themes = {
  dark: {
    background: "#383838",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

export const ThemeContext = React.createContext(themes.dark);

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === themes.dark ? "Dark" : "Light"}
      </button>
      <ThemeContext.Provider value={theme}>
        <Context />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
