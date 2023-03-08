import './App.css'
import { useState, useEffect } from 'react'
import { kana } from './data'
import NavBar from './components/NavBar'
import Options from './components/Options'
import Quiz from './components/Quiz'

function App() {
  const [filteredList, setFilteredList] = useState(kana)

  function handleFilter(newData) {
    setFilteredList(newData)
    console.log(filteredList)
  }

  return (
    <div className='app'>
      <NavBar />
      <Options onFilter={handleFilter}/>
      <Quiz data={filteredList}/>
    </div>
  )
}

export default App
