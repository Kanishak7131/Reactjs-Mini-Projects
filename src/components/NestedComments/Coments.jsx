import { useState } from "react"

export default function Comments({ content, handleReply }) {
    let [input, setinput] = useState("")
    let [toggle, setToggle] = useState(false)

    function handleClick(id) {
        handleReply(id, input)
        setinput("")
        setToggle(false)
    }
    return (
        <div >
            <div style={{ display: "flex", gap: "2rem", alignContent: "center" }}>
                <p>{content.title}</p>
                <button onClick={() => setToggle(!toggle)}>{toggle ? `Undo` : `Add reply`}</button>
            </div>
            {
                toggle && (<div style={{ display: "flex", gap: "2rem", alignContent: "center" }}>
                    <input value={input} onChange={(e) => setinput(e.target.value)} />
                    <button onClick={() => handleClick(content.id)}>Add</button>
                </div>)
            }
            <div style={{ marginLeft: "2rem" }}>
                {
                    content.child && content.child.map((item) => <Comments key={item.id} content={item} handleReply={handleReply} />)
                }
            </div>
        </div>
    )
}