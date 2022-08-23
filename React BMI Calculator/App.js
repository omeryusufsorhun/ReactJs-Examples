import { useState } from "react";
import "./index.css";
function App() {
  //state
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("there is no value");
  const [height, setHeight] = useState(0);

  let imgSrc = "";

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid value");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));

      if (bmi < 18) {
        setMessage("You are underweight");
      } else if (bmi > 18 && bmi < 25) {
        setMessage("You are healthy");
      } else {
        setMessage("you are obes");
      }
    }
  };

  let reload = () => {
    window.location.reload(); //refresh the input
  };
  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calcuator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input onChange={(e) => setWeight(e.target.value)} value={weight} />
          </div>
          <div>
            <label>Height (m)</label>
            <input onChange={(e) => setHeight(e.target.value)} value={height} />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>

            <button onClick={reload} className="btn btn-outline" type="submit">
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message} </p>
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
}

export default App;
