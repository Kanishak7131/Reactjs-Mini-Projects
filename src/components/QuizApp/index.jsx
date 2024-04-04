import { useState } from "react"
import data from "./quiestion"
export default function QuizApp() {
    let [que, setQue] = useState(0)
    let [error, setError] = useState(null)
    function handleClick(val) {
        if (val == true) {
            if (que == data.length - 1) {
                setQue(0)
                setError("Completed the quiz!")
            } else {
                setQue(prev => prev + 1)
                setError("Correct !")
            }

        } else {
            setError("OOpsie!")
        }

    }
    return (
        <>
            <div>
                <p>{data[que].question}</p>
                {data[que].answerOptions.map((item, index) => <button key={index} onClick={() => handleClick(item.isCorrect)}>{item.text}</button>)}
            </div>
            {error && <h2>{error}</h2>}
        </>
    )
}