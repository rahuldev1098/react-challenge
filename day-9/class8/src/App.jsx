import React, { useState } from 'react'

const App = () => {

  const [marks, setmarks] = useState([60, 98, 76, 12, 29])

  function graceStudent(){
    const newMarks = marks.map(function(elem){
      return elem+5
    })
    setmarks(newMarks)
  }
  return (
    <div>
      {marks.map(function(elem, idx){
        return <h1 key={idx}>Student {idx+1} = {elem}</h1>
      })}

      <button onClick={graceStudent}>Give them grace</button>
    </div>
  )
}

export default App