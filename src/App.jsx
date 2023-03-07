import './App.css'
import { kana } from './data'
import NavBar from './components/NavBar'
import Options from './components/options'
import Quiz from './components/Quiz'

function App() {

  return (
    <div>
      <NavBar />
      <Options />
      <Quiz />
    </div>
  )
}

export default App
