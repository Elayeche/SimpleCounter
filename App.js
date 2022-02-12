import "./App.css";
import { useState } from "react";

function App() {

 let [count, setCount]=useState(0);

  const incrementCount = () =>{
    count++;
    setCount(count);
  }

  const decrementCount = () =>{
    count--;
    setCount(count);
  }


  return <div className="App">
    
        <span>{count}</span>

        {/*<button onClick={()=>{setCount(count++)}}> + </button>
        <button onClick={()=>{setCount(count--)}}> - </button>*/}

        {/*<button onClick={()=>{count++;setCount(count)}}> + </button>
        <button onClick={()=>{count--;setCount(count)}}> - </button>*/}
        
         <button onClick={incrementCount}> + </button>
        <button onClick={decrementCount}> - </button>
   
  </div>
  
}

export default App;
