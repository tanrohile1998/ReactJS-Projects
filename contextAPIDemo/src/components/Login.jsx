import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

export default function Login(){
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        console.log("Hello")
        e.preventDefault();
        setUser(username)
    }
    return(
        <div className="container mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="text1" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            id="text1"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="text2" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="text"
            id="text2"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Click me
        </button>
      </div>
  
    )
}