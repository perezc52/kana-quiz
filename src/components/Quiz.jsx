import { useState, useEffect, useRef } from "react"

function Quiz(props) {

    const [quizKana, setQuizKana] = useState([])
    const [currentKana, setCurrentKana] = useState("")
    const [message, setMessage] = useState("")
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef(null)

    useEffect(() => {
        setQuizKana(shuffleArray(props.data))
        setMessage("")
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

    function handleKeyPress(event) {
      if(event.key === 'Enter' && !message) checkAnswer()
      if(event.key === 'Enter' && message) nextKana()
    }

    function checkAnswer() {
      if(inputValue.length === 0) return
      const kanaObject = quizKana.find(el => el.kana === currentKana)
      const correctAnswer = kanaObject.romanized
      if(inputValue.toLowerCase() === correctAnswer) {
        setMessage("Correct!")
      }else {
        setMessage(`Incorrect! The answer was "${correctAnswer}"`)
      }
    }

    function nextKana() {
      setMessage("")
      setInputValue("")
      inputRef.current.focus()
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
 
    return (
        <div className="quiz">
            <h1 className="kana">{currentKana}</h1>
            {
              quizKana.length !== 0 &&
              <>
                <p>Press 'Enter' to check your answer and again to proceed.</p>
                <input
                  type="text"
                  ref={inputRef}
                  value={inputValue}
                  onKeyDown={handleKeyPress}
                  onChange={handleInputChange} />
                <div className="quiz-buttons">
                  <button 
                    className="btn"
                    onClick={nextKana}
                    >Next kana
                  </button>
                  <button
                    className="btn"
                    onClick={checkAnswer}
                    >Check answer
                  </button>
                </div>
              </>
            }
            <h2 className="message">{message}</h2>
            {quizKana.length === 0 && <button className="retry" onClick={retry}>Retry this set</button>}
            
        </div>
    )
}

export default Quiz