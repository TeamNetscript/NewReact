import React, { Component } from "react";
import Slider from "react-slick";
import { useState } from "react";
import app1 from "./images/office1.jpg"; 
import Data from "./Data";
import DataCard from "./DataCard";
 
function SimpleSlider() { 
  const [mData, setData] = useState(Data); 
  
  return (
  
      <DataCard mData={mData}/>
   
  );
}

export default SimpleSlider; 

 