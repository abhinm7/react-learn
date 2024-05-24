import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count,setCount] = useState(15);

  // let count= 10;
  let addValue = ()=>{
    setCount((x)=>x+1)
    setCount((x)=>x+1)
    setCount((x)=>x+1)
    setCount((x)=>x+1)
  }
  let removeValue = ()=>{
    setCount(count-1)
  }
  
  return (
    <>
      <h1>hello</h1>
      <h2>counter value :{count} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
