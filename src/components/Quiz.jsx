import { useState, useEffect } from "react"

function Quiz(props) {

    const [quizKana, setQuizKana] = useState([])
    const [message, setMessage] = useState("")
    const [currentKana, setCurrentKana] = useState("")

    useEffect(() => {
        setQuizKana(shuffleArray(props.data))
    }, [props.data])

    useEffect(() => {
        if (quizKana.length > 0) {
          setCurrentKana(quizKana[0].kana);
        }
      }, [quizKana])

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      function checkAnswer() {
        // answer checking logic here
      }

      function nextKana() {
        setQuizKana(prevQuizKana => {
            const newQuizKana = [...prevQuizKana]
            newQuizKana.shift()
            return newQuizKana
        })
      }

      console.log(quizKana)
      console.log(currentKana)
 
    return (
        <div className="quiz">
            <h1 className="kana">{quizKana.length > 0 ? currentKana : "You've finished all kana for this setting. Would you like to retry?"}</h1>
            <input type="text" />
            <button onClick={nextKana}>Next kana</button>
            <button onClick={checkAnswer}>Check answer</button>
            <h2>{message}</h2>
        </div>
    )
}

export default Quiz