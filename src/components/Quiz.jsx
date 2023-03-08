import { useState, useEffect } from "react"

function Quiz(props) {
    const [quizKana, setQuizKana] = useState([])

    useEffect(() => {
        setQuizKana(props.data?.map((el,i) => (
            <li key={i}>{el.kana}</li>
        )));
    }, [props.data])
 
    return (
        <div className="quiz">
            <h1 className="kana"></h1>
            <ul>
                {quizKana}
            </ul>
            <input type="text" />
            <button>Enter</button>
        </div>
    )
}

export default Quiz