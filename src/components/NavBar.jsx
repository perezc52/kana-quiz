import { useState } from "react"

function NavBar(props) {

  const [selectedTab, setSelectedTab] = useState("quiz")

  function handleClick(tab) {
    setSelectedTab(tab)
    props.onClick(tab)
  }

  return (
    <nav className="navbar">
        <h2 onClick={() => handleClick("quiz")} className={selectedTab === "quiz" ? "selected" : ""}>Quiz</h2>
        <h2 onClick={() => handleClick("reference")} className={selectedTab === "reference" ? "selected" : ""}>Reference</h2>
    </nav>
  )
}

export default NavBar