import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Form from './components/Form'
import Villager from './components/Villager'

const App = () => {
  const [filter, setFilter] = useState('')
  const [villagers, setVillagers] = useState([])

  useEffect(() => {
    axios.get('https://acnhapi.com/v1/villagers/').then(response => {
      console.log(Object.values(response.data))
      setVillagers(Object.values(response.data))
    })
  }, [])

  const handleBirthdayChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className='container'>
      <Form birthday={filter} handleBirthdayChange={handleBirthdayChange}/>
      <Villager villagers={villagers} filter={filter}/>
    </div>
  )
}

export default App;
