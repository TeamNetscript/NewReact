 
import './App.css';   
import React, { useEffect, useState } from "react"; 
import Navbar from './components/Navbar.js';
import Home from './components/Home.js'; 
import Form from './components/form/Form.js'; 
import Sliders from './components/Sliders.js';
import Footer from './components/Footer.js';
import Jobs from './components/Jobs.js';
import Login from './components/login/Login.js';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (   
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/sliders" element={<Sliders/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>   
    
  );
}

export default App; 