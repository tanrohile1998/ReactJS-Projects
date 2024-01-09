import { useEffect } from "react"
import { useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function(){
    const data = useLoaderData()
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/tanrohile1998')
    //     .then((response)=>response.json())
    //     .then((resp)=>setData(resp))
    // },[])
    return(
        <>
            <h1>Github Profile Picture</h1>
            <img src={data.avatar_url} alt="Git Picture"/>
        </>
    )
}

export const getGithubInfo = async()=>{
    const response = await fetch('https://api.github.com/users/tanrohile1998')
    return response.json();
}