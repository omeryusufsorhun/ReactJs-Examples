import logo from './logo.svg';
import './App.css';
import './index.css'
import { useRef } from 'react';



const alertFunction = () => {
  alert("hi")
}

function App() {
  const inputRef=useRef();
  const focusInput=()=>{
    inputRef.current.focus() // inputa focuslanır

  }
  return (
    <>
    <h1>useRef ve useForward</h1>
    <input type="text" ref={inputRef}></input>
    <button onClick={focusInput}>Focusla</button>
    
    
    
    
    </>
    
    

  );
}

export default App;
