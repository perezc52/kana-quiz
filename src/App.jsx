import './App.css'
import { kana } from './data'
import NavBar from './components/NavBar'
import Options from './components/Options'
import Quiz from './components/Quiz'

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Options />
      <Quiz />
    </div>
  )
}

export default App
