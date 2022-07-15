import logo from './logo.svg';
import './App.css';
import { useState,useReducer } from 'react';
import {Routes,Route,Link,NavLink} from "react-router-dom"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/Blog';
import "./index.css";



function App() {

  return (
    <>
    <NavLink to="/home">AnaSayfa</NavLink>
    <NavLink to="/contact">İletişim</NavLink>
    <NavLink to="/blog">Blog</NavLink>

    <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
    </Routes>

    </>
    
    

  );
}

export default App;
