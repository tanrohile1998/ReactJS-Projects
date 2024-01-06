import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('')

  const red = ()=>{
    setColor('red')
  }
  const green = ()=>{
    setColor('green')
  }
  const orange = ()=>{
    setColor('orange')
  }
  const yellow = ()=>{
    setColor('yellow')
  }
  return (
    
            <div className={`flex items-center justify-center full-h-screen w-full bg-${color}-500`}>
                <div className="px-4">
                    <div className="w-4/5 md:w-1/2 lg:w-1/3 bg-white rounded-lg p-6 flex justify-around items-center">
                        <button onClick={red} className="rounded-full px-4 py-2 bg-red-500 text-white">Red</button>
                        <button onClick={green} className="rounded-full px-4 py-2 bg-green-500 text-white">Green</button>
                        <button onClick={orange} className="rounded-full px-4 py-2 bg-orange-500 text-white">Orange</button>
                        <button onClick={yellow} className="rounded-full px-4 py-2 bg-yellow-500 text-white">Yellow</button>
                    </div>
                </div>
            </div>
        );
    }


export default App
