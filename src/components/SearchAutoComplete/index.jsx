import { useState } from "react"

const data = ["apple", "mango", "lemon", "grape"]

export default function SearchAutoComplete() {
    let [input, setInput] = useState("")
    return (<>
        <input style={{ border: "2px solid black" }} value={input} onChange={(e) => setInput(e.target.value)} />
        {input && data.filter((item) => item.includes(input)).map((item) => <div>{item}</div>)}
    </>)
}