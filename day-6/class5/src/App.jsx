import React, { useState } from 'react'


//use state

const App = () => {

  const [king, setKing] = useState("Rahul")
  const [queen, setQueen] = useState("Priyanka")

  const changeKing = ()=>{
    setKing("Mohit")
  }
  const changeQueen = ()=>{
    setQueen("Nikita")
  }
  return (
    <div>
      <h1>{king} x {queen}</h1>
      <button onClick={changeKing}>Change King</button>
      <button onClick={changeQueen}>Change Queen</button>
    </div>
  )
}

export default App