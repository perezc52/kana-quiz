import { useState, useEffect } from "react"

function Quiz(props) {
    const [quizKana, setQuizKana] = useState([])
    const [message, setMessage] = useState("")

    useEffect(() => {
        setQuizKana(shuffleArray(props.data));
    }, [props.data])

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      function checkAnswer() {

      }

      function nextKana() {

      }
 
    return (
        <div className="quiz">
            <h1 className="kana">{quizKana[0]?.kana}</h1>
            <input type="text" />
            <button>I don't know 😩</button>
            <button onClick={checkAnswer}>Check answer</button>
            <h2>{message}</h2>
        </div>
    )
}

export default Quiz