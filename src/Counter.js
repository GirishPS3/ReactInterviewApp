import React, { useState } from 'react'
import Header from './Header'

export default function Counter() {
    const [count, setCount]=useState(0);
    const incrementCounter=()=>{
        setCount(count+1)
    }
    const derementCounter=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const reset=()=>{
        setCount(0);
    }
  return (
    <div>
        <Header/>
        <h1>{count}</h1>
        <button onClick={incrementCounter} on>+</button>  
        <button onClick={derementCounter}>-</button>  
        <button onClick={reset}>reset</button>  
    </div>
  )
}
