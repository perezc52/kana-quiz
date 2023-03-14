import './App.css'
import { useState } from 'react'
import { kana } from './data'
import NavBar from './components/NavBar'
import Options from './components/Options'
import Quiz from './components/Quiz'
import Reference from './components/Reference'

function App() {
  const [filteredList, setFilteredList] = useState(kana.filter(el => el.cat === 'plainHiragana'))
  const [selectedTab, setSelectedTab] = useState("quiz")

  function handleFilter(newData) {
    setFilteredList(newData)
  }

  function handleClick(tab) {
    setSelectedTab(tab)
  }

  return (
    <div className='app'>
      <NavBar onClick={handleClick}/>
      {
        selectedTab === "quiz" ?
        <div className='quiz-options'>
          <Quiz data={filteredList} />
          <Options onFilter={handleFilter}/>
        </div> :
        <Reference />
      }
    </div>
  )
}

export default App
