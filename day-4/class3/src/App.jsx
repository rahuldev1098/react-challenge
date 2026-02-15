import React from 'react'
import Card from './components/Card'
import Button from './components/Button'
import Array from './components/Array'

const App = () => {

  const users = ['Anubhav', 'Mohit', 'Rohit']
  return (
    <div className='p-10 h-screen bg-black'>
      <Card user="Rahul" age={90} />
      <Card user="Mohit" age={20} />
      <Card user="Vikram" age={30} />

      <Button text="Buy Now" />

      {users.map(function(elem){
        return <Array user={elem} />
      })}
    </div>
  )
}

export default App
