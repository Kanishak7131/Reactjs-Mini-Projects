import { useEffect, useRef, useState } from "react";

export default function ContinueCounter() {
    let [count, setCount] = useState(0)
    let timer = useRef()
    function handleStart() {
        clearInterval(timer.current)
        setCount(0)
        timer.current = setInterval(() => setCount(prev => prev + 1), 1000)
    }
    function handleStop() {
        clearInterval(timer.current)
    }
    function handleReset() {
        clearInterval(timer.current)
        setCount(0)
    }

    return (<>
        <button onClick={handleStart}>Start</button>
        <h3>{count}</h3>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </>)
}