import logo from './logo.svg';
import './App.css';
import { useState,useReducer } from 'react';
import "./index.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [name,setName]=useState("omer"); //name, değiştirmek istediğimiz değişkenin adı setName onu değiştireceğimiz fonksiyonun adı.
  const [age,setAge]=useState(20);
  return (
    <>
    <h1 className='bg-color-red'>Hello World {name}</h1>
    <h2>{age}</h2>
    <Button variant="dark" onClick={()=>setName("yusuf")}>Değiştir</Button>
    <Button variant="dark" onClick={()=>setAge(21)}>Yaşı Değiştir</Button> 
    
    

    </>
    
    

  );
}

export default App;
