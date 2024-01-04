 
import { useState } from "react"; 
import Data from "./Data";
import DataCard from "./DataCard";
 
function SimpleSlider() { 
  const [mData, setData] = useState(Data); 
  
  return (
      <DataCard mData={mData}/>
  );
}

export default SimpleSlider; 

 