import { useEffect, useState, useRef } from "react"

export default function Ticker() {
    let [tick, setTick] = useState(0)
    let timer = useRef()
    useEffect(() => {
        timer = setInterval(() => setTick(prev => prev + 1), 1000)
        console.log("yo")
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (<>
        <div>{tick}</div>
    </>)
}