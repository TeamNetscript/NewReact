 
import { useState } from "react"; 
import Data from "./Data";
import DataCard from "./DataCard";
import SliderTitle from "./SliderTitle";
 
function Sliders() { 
  const [mData, setData] = useState(Data); 
  
  return (
    <>
      <SliderTitle/>
      <DataCard mData={mData}/>
    </>
  );
}

export default Sliders; 

 