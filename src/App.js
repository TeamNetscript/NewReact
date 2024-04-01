 
import './App.css';    
import Navbar from './components/Navbar.js';
import Home from './components/Home.js'; 
import Form from './components/form/Form.js'; 
import Sliders from './components/Sliders.js';
import Footer from './components/Footer.js';
import Jobs from './components/Jobs.js';
import Login from './components/login/Login.js';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import useToken from './components/App/useToken';

function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken));
}
function getToken(){
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() { 
  
  const { token, setToken } = useToken(); 

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