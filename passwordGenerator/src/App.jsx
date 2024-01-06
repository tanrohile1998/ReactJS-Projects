import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [password,setPassword] = useState('')
  const[length,setLength] = useState(8)
  const[number,setNumber] = useState(false)
  const[character,setCharacter] = useState(false)

  const passwordGenerator=useCallback(()=>{
    let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  
    if(number) str+='0123456789'
    if(character) str+='~`!@#$%^&*()_';
    let pass=''
  
    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,number,character,setPassword])

  const passRef = useRef(null)
  const copyClipToBoard = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(()=>{
    passwordGenerator()

  },[length,number,character,passwordGenerator])

  return (
    <>
    <div className="border p-4 mb-4 bg-gray-700">
    <div className="flex items-center justify-center">
      <input type="text" className="border p-2 w-64" value={password} ref={passRef} readOnly/>
      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={copyClipToBoard}>Copy</button>
    </div>
  </div>


  <div className="border p-4 bg-gray-700 text-white">
    <div className="flex items-center justify-center px-4">
      <label className="mr-2">Range:</label>
      <input type="range" className="mr-2" value={length} onChange={(e)=>setLength(e.target.value)}/>
      <label>Length:({length})</label>
      <label className="mr-2">
        <input type="checkbox" id="number" defaultValue={number} name="number" className="mr-1" onChange={()=>{setNumber((prev)=>!prev)}}/>Number
      </label>
      <label>
        <input type="checkbox" id="character" defaultValue={character} name="character" className="mr-1" onChange={()=>{setCharacter((prev)=>!prev)}}/>Character
      </label>
    </div>
  </div>
  </>
  )
}

export default App
