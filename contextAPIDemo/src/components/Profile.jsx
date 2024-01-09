import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Profile(){
    const {user} = useContext(UserContext)
console.log(user);
    if(!user) {
       return(<div>Please login</div>) 
    }
    else{
        return(<div>User is {user}</div>)
    }
}