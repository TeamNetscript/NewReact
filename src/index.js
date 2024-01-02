import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from "./root.js";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer.js';
import Venue from './components/Venue.js';
import Tips from './components/Tips.js';
import Add from './components/Add.js';
import Home from './components/Home.js';
import BannerSlide from './components/BannerSlide.js';
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <React.StrictMode> 
  //     <App />  
  //   </React.StrictMode>
  // </BrowserRouter>
  <App /> 
);

// If you want to start measuring performance in your app, pass a function 
reportWebVitals();
 