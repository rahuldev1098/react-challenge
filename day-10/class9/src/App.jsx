import React, { useState } from 'react'

const App = () => {


  const [name, setname] = useState('')

  const [allusers, setallusers] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault()
    const oldusers = [...allusers]

    oldusers.push(name)
    
    setallusers(oldusers)

    setname('')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text"
        placeholder='Enter your name'
        value={name}
        required
        onChange={(e)=>{
          setname(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>

      {allusers.map(function(elem){
        return <h4>{elem}</h4>
      })}
    </div>
  )
}

export default App