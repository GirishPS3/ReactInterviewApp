import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
    let navigate=useNavigate();
  return (
    <div><header style={{display: "flex",width: "100%"}}>
    <div>React APP</div>
    <div>
      <button onClick={() => navigate('/')}>Page 1</button>
      <button onClick={() => navigate('/counter')}>Page 2</button>
    </div>
  </header></div>
  )
}
