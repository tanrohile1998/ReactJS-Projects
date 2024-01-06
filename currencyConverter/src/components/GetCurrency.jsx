import React, { useEffect, useState } from "react";

function GetCurrency(Currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`)
        .then((curr)=>curr.json())
        .then((curr)=>setData(curr[Currency]))
    },[Currency])

    return data
}
export default GetCurrency
