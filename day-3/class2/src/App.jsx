import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='p-10 h-screen bg-black'>
      {Card('Rahul', 25)}
    </div>
  )
}

export default App
