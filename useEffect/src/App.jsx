import { useEffect, useState } from 'react'
import './App.css'

function App(){
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("white")

  useEffect(()=> {
    console.log("Inside useEffect", count);

    return () =>{
      console.log("clean up", count);
    }
  },[])

  return(
    <div style={{backgroundColor:color, height:"100vh"}}>
      <p style={{color:"red"}}>{count}</p>
      <button
      onClick={()=>{
        setCount(count+1)
      }}
      >
        Click me
      </button>
      <button
      onClick={()=>{
        setColor(color==="white" ? "green" : "white")
      }}
      >
        Toggle Color
      </button>
    </div>
  )
}

export default App
