import React, { useState } from "react"
import './App.css';

function App() {
  const[total, setTotal] = useState(0);
  const[data,setData] = useState({
    type:"",
    srcPin:0,
    desPin:0,
    weight:0,
    height:0,
    width:0,
    length:0,
  })
  const countTotal = (e) => {
    e.preventDefault();
    const r = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type:data.type, srcPin:data.srcPin, desPin:data.desPin, weight:data.weight, height: data.height, width: data.width, length: data.length})
  }
    fetch("http://localhost:5000/total", r
    ).then(item => item.json())
  .then(item => setTotal(item.total))
  .catch(error => console.log(error));

  }
  // console.log(data);
  return (
    <>
    <form onSubmit={countTotal}>
    <input 
        value={data.type} 
        onChange={(e) => setData(prev => ({...prev,type:e.target.value}))} 
        placeholder='type-of-payment' 
        type="text" 
      />
      <input 
        value={data.srcPin} 
        onChange={(e) => setData(prev => ({...prev,srcPin:e.target.value}))} 
        placeholder='Source-pincode' 
        type="number" 
      />
      <input 
        value={data.desPin}
        onChange={(e) => setData(prev => ({...prev,desPin:e.target.value}))} 
        placeholder='Destination-pincode' 
        type="number" 
      />
      <input 
        value={data.weight}
        onChange={(e) => setData(prev => ({...prev,weight:e.target.value}))}
        placeholder="Weight in kg" 
        type="number" 
      />
      <input
        value={data.height}
        onChange={(e) => setData(prev => ({...prev,height:e.target.value}))}
        placeholder="Height in cm" 
        type="number" 
      />
      <input 
        value={data.width}
        onChange={(e) => setData(prev => ({...prev,width:e.target.value}))}
        placeholder="Width in cm" 
        type="number" 
      />
      <input 
        value={data.length}
        onChange={(e) => setData(prev => ({...prev,length:e.target.value}))}
        placeholder="Length in cm" 
        type="number" 
      />
      <button
        type="submit"
      >
        Submit
      </button>
    </form>
    <div>Total is : {total}</div>
    </> 
  );
}

export default App;
