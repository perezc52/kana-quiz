import './App.css'
import { useState } from 'react'
import { kana } from './data'
import NavBar from './components/NavBar'
import Options from './components/Options'
import Quiz from './components/Quiz'

function App() {
  const [filteredList, setFilteredList] = useState(kana.filter(el => el.cat === 'plainHiragana'))

  function handleFilter(newData) {
    setFilteredList(newData)
  }

  return (
    <div className='app'>
      <NavBar />
      <Options onFilter={handleFilter}/>
      <Quiz data={filteredList} />
    </div>
  )
}

export default App
