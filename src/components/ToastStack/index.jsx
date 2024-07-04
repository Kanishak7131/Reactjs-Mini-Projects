import { useEffect, useState } from "react"

export default function ToastStack() {
    let [show, setShow] = useState(null)
    function handleClick(e) {
        setShow(true)
    }
    return (<>
        <button style={{ position: "relative" }} onClick={handleClick}>Click me </button>
        {
            show && <Toasty show={show} setShow={setShow} />
        }
    </>)
}

function Toasty({ show, setShow }) {
    useEffect(() => {
        let timer = setTimeout(() => {
            setShow(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])
    return (
        <div style={{ position: "absolute", display: "flex", border: "2px solid black" }}> I am a toast message</div>
    )
}