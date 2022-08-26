import { createContext, useState } from "react";
import "./index.css";
import Context from "./components/Context";

export const Theme = createContext();
const tema = {
  dark: {
    color: "white",
    backgroundColor: "black",
  },
  light: { color: "black", backgroundColor: "white" },
};
export default function App() {
  const [deger, setDeger] = useState(tema.dark);
  const changeTheme = () => {
    if (tema.dark === deger) {
      setDeger(tema.light);
    } else {
      setDeger(tema.dark);
    }
  };
  return (
    <div className="App">
      <button onClick={changeTheme}>
        {tema.dark === deger ? "Koyu" : "Açık"}
      </button>
      <Theme.Provider value={deger}>
        <Context />
      </Theme.Provider>
    </div>
  );
}
