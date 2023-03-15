import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const[size, setSize] = useState({
    height:320,
    width:320
  });
  // const[weight, setWeight] = useState(320);
  const handleChange = (e)=>{
    setSize({...size, [e.target.name]:e.target.value});
  }
  return (
    <div id="main">
      <input type="range" name={"height"} min={100} max={800} value={size.height} id={"height-slider"} onChange={handleChange}/>
      <input type="range" name='width' min={100} max={800} value={size.width} id={"width-slider"} onChange={handleChange}/><br/>
      <img src="src\image.jpeg" alt="image" id='resizable-img' height={size.height+"px"} width={size.width+"px"}/>
    </div>
  )
}


export default App;
