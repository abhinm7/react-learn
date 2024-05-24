import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('white')

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button onClick={()=>setColor('blue')} className='outline-none px-4 py-2 rounded-full shadow-lg text-black bg-blue-200' >blue</button>
             <button onClick={()=>setColor('red')} className='outline-none px-4 py-2 rounded-full shadow-lg text-black bg-red-200' >red</button>
             <button onClick={()=>setColor('green')} className='outline-none px-4 py-2 rounded-full shadow-lg text-black bg-green-200'>green</button>
        </div>
      </div>
      
    </div>
  )
}

export default App














