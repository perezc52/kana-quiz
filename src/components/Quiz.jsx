import { useState, useEffect } from "react"

function Quiz(props) {

    const [quizKana, setQuizKana] = useState([])
    const [currentKana, setCurrentKana] = useState("")
    const [message, setMessage] = useState("")
    const [inputValue, setInputValue] = useState("")

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

    function handleInputChange(event) {
      setInputValue(event.target.value)
    }

    function checkAnswer() {
      if(inputValue.length === 0) return
      const kanaObject = quizKana.find(el => el.kana === currentKana)
      const correctAnswer = kanaObject.romanized
      if(inputValue === correctAnswer) {
        setMessage("Correct!")
      }else {
        setMessage(`Incorrect! The answer was ${correctAnswer}`)
      }
    }

    function nextKana() {
      setMessage("")
      setInputValue("")
      setQuizKana(prevQuizKana => {
          const newQuizKana = [...prevQuizKana]
          newQuizKana.shift()
          return newQuizKana
      })
      if(quizKana.length === 1) {
        setCurrentKana("")
        setMessage("You have finished all kana for this setting. Retry or choose a new setting")
      }
    }

    function retry() {
      setQuizKana(shuffleArray(props.data))
      setMessage("")
    }

    console.log(quizKana)
    console.log(currentKana)
 
    return (
        <div className="quiz">
            <h1 className="kana">{currentKana}</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button disabled={!quizKana.length} onClick={nextKana}>Next kana</button>
            <button disabled={!quizKana.length} onClick={checkAnswer}>Check answer</button>
            <h2>{message}</h2>
            {quizKana.length === 0 && <button onClick={retry}>Retry this set</button>}
        </div>
    )
}

export default Quiz