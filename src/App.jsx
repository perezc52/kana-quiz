import './App.css'
import { kana } from './data'

function App() {
  const listItems = kana.map((el,i) => {
    return (
      <li key={i}>{el.kana}</li>
    )
  })

  return (
    <div>
      <h1>血敷くなひくとねもみはハマ</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default App
