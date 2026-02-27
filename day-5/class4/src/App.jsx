import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {

  const user1 = {
    name:'Harshit',
    age:30,
    gender:'male'
  }
  const user2 = {
    name:'Priyanka',
    age:30,
    gender:'female'
  }

  return (
    <div>
      <Navbar title="Rahul" color="red" links={['Home', 'About', 'Account', 'Contact']} />
      <Navbar title="Mohit" color="green" links={['Home', 'About', 'Account', 'Contact']} />
      <Navbar title="Vikram" class="blue" links={['Home', 'About', 'Account', 'Contact']} />

      <Men />
      <Women />

      {user1.gender=='male'?<Men />:<Women />}
    </div>
  )
}

export default App