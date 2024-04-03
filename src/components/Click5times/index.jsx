import { useState } from "react"

export default function Click5times() {
    let [click, setClick] = useState(1)
    let [enable, setenable] = useState(false)

    function handleClick() {
        if (click >= 5) {
            setenable(true)
            return
        }
        setClick(prev => prev + 1)
    }
    return (<>
        <button onClick={handleClick} disabled={enable} style={{ color: enable ? "red" : "green" }}>Click me </button>
        {enable ? <p>Button disabled</p> : <p>Button is enabled , currnt count = {click}</p>}
    </>)
}