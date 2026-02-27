import React, { useState } from 'react'

const App = () => {

  const arr = ["rahul", "vikram", "mohit", "arihant", "shivam"]

  const [num, setnum] = useState(0)

  return (
    <div>
        <h1>{arr[num]}</h1>
        <button onClick={()=>{
          if(num<arr.length-1){
            setnum(num+1)
          }
        }}>Change User</button>
    </div>
  )
}

export default App