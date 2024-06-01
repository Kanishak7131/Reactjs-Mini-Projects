import { useEffect, useState, useRef } from "react"

export default function StopWatch() {

    let [timer, setTimer] = useState(0)
    let [start, setStart] = useState(false);
    let clock = useRef()
    useEffect(() => {
        if (start) {
            clock.current = setInterval(() => {
                setTimer(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(clock.current)
    }, [start])

    function handleStart() {
        setStart(true);
    }

    function handleClear() {
        setStart(false);
        setTimer(0);
        clearInterval(clock.current)
    }

    function handlePause() {
        setStart(false);
        clearInterval(clock.current)
    }
    return (<>
        <div>{timer}</div>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleStart}>Start</button>
    </>)
}