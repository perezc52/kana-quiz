import { kana } from "../data"
import { useState } from "react"

function Quiz() {
    const [kana, setKana] = useState("")
    const [correct, setCorrect] = useState(0)

    function checkAnswer() {

    }

    return (
        <div className="quiz">
            <h1 className="kana">{kana}</h1>
            <input type="text" />
            <button onClick={checkAnswer}>Enter</button>
        </div>
    )
}

export default Quiz