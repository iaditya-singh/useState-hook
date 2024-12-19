import React from "react";
import "./App.css";
import { useState } from "react";

function App() {


const[count, setCount]= useState(0);

const increaseCount = () =>{
setCount(count=>count + 1);
setCount(count=>count + 1);
setCount(count=>count + 1);
setCount(count=>count + 1);
}

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </div>
  );
}

export default App;
