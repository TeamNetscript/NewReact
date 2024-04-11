 
import { useState } from "react"; 
import Data from "./Data";
import DataCard from "./DataCard";
import SliderTitle from "./SliderTitle";
 
function Sliders() { 
  const [mData, setData] = useState(Data); 

  const [sname, setSname] = useState('Taylor');

  const [count, setCount]=useState(0);

  const [text, setText]=useState('hello');

  function handleClick(){
    setSname('Maxwell'); 
  }

  function countIt(){
    setCount(count + 1);
  }

  function handleChange(e){
    setText(e.target.value);
  }

  
  return (
    <>
      <SliderTitle/>
      <DataCard mData={mData}/>
      {/* <button onClick={handleClick}>{sname}</button>
      <button onClick={countIt}>You pressed {count} times.</button>
      <h1>You Pressed {count}.</h1>

      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button> */}
    </>
  );
}

export default Sliders; 

 