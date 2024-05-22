import { useEffect, useState } from "react"

export default function Toast() {
    let [result, setResult] = useState(false)
    function toastAppear() {
        setResult(true)

    }

    return (
        <>
            {result && <Toasty />}
            <button onClick={toastAppear}>Click me to raise a toast</button>
        </>
    )
}

function Toasty() {
    let [show, setShow] = useState(true)
    useEffect(() => {
        let timerId = setTimeout(() => setShow(false), 5000)
        return () => clearTimeout(timerId)
    }, [])
    if (!show) {
        return null
    }
    return (
        <div>
            Hello World!
        </div>
    )
}