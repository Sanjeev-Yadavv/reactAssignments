import React, { useState, useEffect } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true)
  useEffect(() => {
   let id;
   if (running) {
    id = setInterval(()=>{
        setCount(prevCount=>prevCount+1)
    },1000)
   }

   return ()=>{
    if(id){
        clearInterval(id)
    }
   }
  
  }, [running]);
  
  function StopCount () {
   setRunning(!running)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={StopCount}>{running ? 'Stop': 'Start'}</button>
    </div>
  );
}

export default CounterComponent;
