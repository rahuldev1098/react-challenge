import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1)
      }}>Change it</button>
    </div>
  )
}

export default App