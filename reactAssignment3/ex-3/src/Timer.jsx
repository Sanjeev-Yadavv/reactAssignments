import {useState, useEffect} from 'react'

function Timer () {
  const [timer, SetTimer] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect (() =>{
    let id;
    if (running){
        id = setInterval(()=>{
             SetTimer(prevTime=> prevTime+1)
        },1000)
    }

    return ()=>{
        if(id){
            clearInterval(id)
        }
    }
  },[running])





function ToggleButton () {
    setRunning(!running)
}
  return(
    <div>
        <h1>Count : {timer}</h1>
        <button onClick={ToggleButton}>{running ? 'Start' : 'Stop'}</button>

    </div>
  )
}

export default Timer;